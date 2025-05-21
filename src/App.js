// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Fixtures from './components/Fixtures';
import Leaderboard from './components/Leaderboard';
import { db, auth } from './firebase';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    doc,
    updateDoc
} from 'firebase/firestore';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const players = ['Yash Rathore', 'Maldini', 'Hoo Lee Sheet', 'Scarlett', 'Starky', 'Amon'];
const ADMIN_UID = '5FNYwYZpNZWXKSXBAuZ9OeMuk2w2'; // Replace this with your actual UID

function App() {
    const [fixtures, setFixtures] = useState([]);
    const [user, setUser] = useState(null);
    const isAdmin = user && user.uid === ADMIN_UID;

    useEffect(() => {
        const q = query(collection(db, "fixtures"), orderBy("id"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const loadedFixtures = snapshot.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));
            setFixtures(loadedFixtures);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribeAuth();
    }, []);

    const updateScore = async (id, playerKey, value) => {
        if (!isAdmin) {
            alert("Only admin can update scores!");
            return;
        }
        const match = fixtures.find(f => f.id === id);
        if (!match) return;

        const newScore1 = playerKey === 'p1' ? (value === '' ? null : Number(value)) : match.score1;
        const newScore2 = playerKey === 'p2' ? (value === '' ? null : Number(value)) : match.score2;

        try {
            const matchDoc = doc(db, "fixtures", match.docId);
            await updateDoc(matchDoc, {
                score1: newScore1,
                score2: newScore2
            });
        } catch (err) {
            console.error("Error updating score:", err);
        }
    };

    const login = async () => {
        const email = prompt("Enter admin email:");
        const password = prompt("Enter admin password:");
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    const logout = () => {
        signOut(auth);
    };

    const completedMatches = fixtures.filter(f => f.score1 !== null && f.score2 !== null);

    return (
        <div className="App">
            <Header />
            <h1>eFootball Tournament</h1>

            {user ? (
                <div>
                    <p>Welcome, {user.email} {isAdmin ? "(Admin)" : ""}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Admin Login</button>
            )}

            <Fixtures fixtures={fixtures} updateScore={updateScore} isAdmin={isAdmin} />
            <Leaderboard players={players} matches={completedMatches} />
        </div>
    );
}

export default App;

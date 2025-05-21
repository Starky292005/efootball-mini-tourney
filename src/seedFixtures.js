// src/seedFixtures.js
import { db } from './firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const fixtures = [
    { id: 1, p1: 'Yash Rathore', p2: 'Hoo Lee Sheet', score1: null, score2: null },
    { id: 2, p1: 'Maldini', p2: 'Amon', score1: null, score2: null },
    { id: 3, p1: 'Scarlett', p2: 'Starky', score1: null, score2: null },

    { id: 4, p1: 'Yash Rathore', p2: 'Maldini', score1: null, score2: null },
    { id: 5, p1: 'Hoo Lee Sheet', p2: 'Scarlett', score1: null, score2: null },
    { id: 6, p1: 'Amon', p2: 'Starky', score1: null, score2: null },

    { id: 7, p1: 'Yash Rathore', p2: 'Amon', score1: null, score2: null },
    { id: 8, p1: 'Hoo Lee Sheet', p2: 'Starky', score1: null, score2: null },
    { id: 9, p1: 'Maldini', p2: 'Scarlett', score1: null, score2: null },

    { id: 10, p1: 'Yash Rathore', p2: 'Scarlett', score1: null, score2: null },
    { id: 11, p1: 'Hoo Lee Sheet', p2: 'Maldini', score1: null, score2: null },
    { id: 12, p1: 'Amon', p2: 'Starky', score1: null, score2: null },

    { id: 13, p1: 'Yash Rathore', p2: 'Starky', score1: null, score2: null },
    { id: 14, p1: 'Hoo Lee Sheet', p2: 'Amon', score1: null, score2: null },
    { id: 15, p1: 'Maldini', p2: 'Scarlett', score1: null, score2: null },

    { id: 16, p1: 'Hoo Lee Sheet', p2: 'Yash Rathore', score1: null, score2: null },
    { id: 17, p1: 'Amon', p2: 'Maldini', score1: null, score2: null },
    { id: 18, p1: 'Starky', p2: 'Scarlett', score1: null, score2: null },

    { id: 19, p1: 'Maldini', p2: 'Yash Rathore', score1: null, score2: null },
    { id: 20, p1: 'Scarlett', p2: 'Hoo Lee Sheet', score1: null, score2: null },
    { id: 21, p1: 'Starky', p2: 'Amon', score1: null, score2: null },

    { id: 22, p1: 'Amon', p2: 'Yash Rathore', score1: null, score2: null },
    { id: 23, p1: 'Starky', p2: 'Hoo Lee Sheet', score1: null, score2: null },
    { id: 24, p1: 'Scarlett', p2: 'Maldini', score1: null, score2: null },

    { id: 25, p1: 'Scarlett', p2: 'Yash Rathore', score1: null, score2: null },
    { id: 26, p1: 'Maldini', p2: 'Hoo Lee Sheet', score1: null, score2: null },
    { id: 27, p1: 'Starky', p2: 'Amon', score1: null, score2: null },

    { id: 28, p1: 'Starky', p2: 'Yash Rathore', score1: null, score2: null },
    { id: 29, p1: 'Amon', p2: 'Hoo Lee Sheet', score1: null, score2: null },
    { id: 30, p1: 'Scarlett', p2: 'Maldini', score1: null, score2: null },
];

export async function uploadFixtures() {
    const fixturesRef = collection(db, "fixtures");
    for (const fixture of fixtures) {
        const docRef = doc(fixturesRef, fixture.id.toString());
        await setDoc(docRef, fixture);
    }
    console.log("✅ Custom Fixtures uploaded successfully!");
}

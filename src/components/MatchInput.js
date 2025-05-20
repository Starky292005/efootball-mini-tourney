import React, { useState } from 'react';

const MatchInput = ({ players, onMatchSubmit }) => {
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [score1, setScore1] = useState('');
    const [score2, setScore2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (p1 && p2 && p1 !== p2 && score1 !== score2) {
            onMatchSubmit({
                player1: p1,
                player2: p2,
                score1: parseInt(score1),
                score2: parseInt(score2)
            });
            setP1('');
            setP2('');
            setScore1('');
            setScore2('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter Match Result</h2>
            <select value={p1} onChange={e => setP1(e.target.value)}>
                <option value="">Player 1</option>
                {players.map(p => <option key={p}>{p}</option>)}
            </select>
            <input type="number" value={score1} onChange={e => setScore1(e.target.value)} placeholder="Score 1" />
            <input type="number" value={score2} onChange={e => setScore2(e.target.value)} placeholder="Score 2" />
            <select value={p2} onChange={e => setP2(e.target.value)}>
                <option value="">Player 2</option>
                {players.map(p => <option key={p}>{p}</option>)}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MatchInput;

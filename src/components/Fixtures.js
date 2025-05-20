import React from "react";

export default function Fixtures({ fixtures, updateScore, isAdmin }) {
    const getWinner = (score1, score2, p1, p2) => {
        if (score1 === null || score2 === null) return '-';
        if (score1 > score2) return p1;
        if (score2 > score1) return p2;
        return 'Draw';
    };

    return (
        <div style={{ marginBottom: 40 }}>
            <h2>Fixtures & Results</h2>
            <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                <tr>
                    <th>Match No.</th>
                    <th>Player 1</th>
                    <th>Score</th>
                    <th>Score</th>
                    <th>Player 2</th>
                    <th>Winner</th>
                </tr>
                </thead>
                <tbody>
                {fixtures.map(({ id, p1, p2, score1, score2 }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{p1}</td>
                        <td>
                            <input
                                type="number"
                                min="0"
                                value={score1 === null ? "" : score1}
                                onChange={(e) => updateScore(id, "p1", e.target.value)}
                                style={{ width: 50 }}
                                disabled={!isAdmin}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                min="0"
                                value={score2 === null ? "" : score2}
                                onChange={(e) => updateScore(id, "p2", e.target.value)}
                                style={{ width: 50 }}
                                disabled={!isAdmin}
                            />
                        </td>
                        <td>{p2}</td>
                        <td>{getWinner(score1, score2, p1, p2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

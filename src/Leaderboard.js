import React from "react";

export default function Leaderboard({ leaderboard }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                <tr>
                    <th>Player</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {leaderboard.map(({ player, played, won, lost, gf, ga, gd, points }) => (
                    <tr key={player}>
                        <td style={{ textAlign: "left", paddingLeft: 10 }}>{player}</td>
                        <td>{played}</td>
                        <td>{won}</td>
                        <td>{lost}</td>
                        <td>{gf}</td>
                        <td>{ga}</td>
                        <td>{gd}</td>
                        <td>{points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

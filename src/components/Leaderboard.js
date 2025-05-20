const Leaderboard = ({ players, matches }) => {
    const stats = {};

    // Initialize stats for each player
    players.forEach(p => {
        stats[p] = { played: 0, won: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 };
    });

    // Calculate stats from matches
    matches.forEach(({ p1, p2, score1, score2 }) => {
        const player1Stats = stats[p1];
        const player2Stats = stats[p2];

        player1Stats.played++;
        player2Stats.played++;
        player1Stats.gf += score1;
        player1Stats.ga += score2;
        player2Stats.gf += score2;
        player2Stats.ga += score1;

        if (score1 > score2) {
            player1Stats.won++;
            player2Stats.lost++;
            player1Stats.points += 3;
        } else if (score2 > score1) {
            player2Stats.won++;
            player1Stats.lost++;
            player2Stats.points += 3;
        }
        // Optionally add draw handling if you want:
        // else {
        //     player1Stats.points += 1;
        //     player2Stats.points += 1;
        // }
    });

    // Calculate goal difference for each player
    players.forEach(p => {
        stats[p].gd = stats[p].gf - stats[p].ga;
    });

    // Sort players by points, then goal difference
    const sorted = [...players].sort((a, b) => {
        const pointDiff = stats[b].points - stats[a].points;
        if (pointDiff !== 0) return pointDiff;
        return stats[b].gd - stats[a].gd;
    });

    return (
        <div>
            <h2>Leaderboard</h2>
            <table>
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
                {sorted.map(p => (
                    <tr key={p}>
                        <td>{p}</td>
                        <td>{stats[p].played}</td>
                        <td>{stats[p].won}</td>
                        <td>{stats[p].lost}</td>
                        <td>{stats[p].gf}</td>
                        <td>{stats[p].ga}</td>
                        <td>{stats[p].gd}</td>
                        <td>{stats[p].points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;

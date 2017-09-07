import React from 'react';
import {Link} from 'react-router-dom';

const GameData = (props) => {
    let games = props.games.map((game, idx) => {
        return (
            <tr key={idx}>
                <td>{game.name}</td>
                <td>{game.summary}</td>
                <td>{game.popularity}</td>
            </tr>
        )
    });
    
    return(
        <div>
            <h2>Top 10 Current Games</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Populartiy</th>
                    </tr>
                </thead>
                <tbody>
                    {games}
                </tbody>
            </table>
        </div>
    )
}

export default GameData;
import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card,
    CardTitle,
    Col,
    Row
} from 'react-materialize';
import Truncate from 'react-truncate';
import './GameData.css'

const GameData = (props) => {
    let games = props.games.map((game, idx) => {
        return (
            <div className="GameData">
                <Row>
                    <Col s={6}>
                        <Card key={idx}
                            header={<CardTitle image={game.cover.url} >{game.name}</CardTitle>}>
                            <Truncate lines={5}><p>{game.summary}</p></Truncate>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    });
    
    return(
        <div className="GameData">
            <h2>Top 10 Current Games</h2>
                    {games}
        </div>
    )
}

export default GameData;
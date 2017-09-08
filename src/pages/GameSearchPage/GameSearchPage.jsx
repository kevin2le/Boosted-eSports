import React from 'react';
import {Link} from 'react-router-dom';

const GameCoverComponent = (props) => {
    console.log('props =', props)
    if (props.cover) {
        return <td><img src={props.cover.url}></img></td>
    } else {
        return <td><img src="https://i.pinimg.com/originals/82/c6/6e/82c66e2672c795af6a7324d4b9c6e92e.jpg" width="300px"></img></td>
    }
}


const GameSearchPage = (props) => {
    console.log('in GameSearchPage, props.search =', props.search)
    let searchResults = props.search.map((search, idx) => {
        return(
            <div key={search._id}>
                <td><a href="https://i.imgur.com/uVNil8x.jpg">{search.name}</a></td>
                <td>{search.summary}</td>
                <GameCoverComponent cover={search.cover}/>
            </div>
        )
    }) 

    

    return (
        <div className="GameSearchPage">
            <h3>Search Results</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Summary</th> 
                        <th>Cover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {searchResults}
                    </tr>
                </tbody> 
            </table>
        </div>
    )
}


export default GameSearchPage;
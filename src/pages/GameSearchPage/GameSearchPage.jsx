import React from 'react';

const GameCoverComponent = (props) => {
    console.log('props =', props)
    if (props.cover) {
        return <td><img src={props.cover.url}></img></td>
    } else {
        return <td><img src="https://i.pinimg.com/originals/82/c6/6e/82c66e2672c795af6a7324d4b9c6e92e.jpg"></img></td>
    }
}


const GameSearchPage = (props) => {
    console.log('in GameSearchPage, props.search =', props.search)
    let searchResults = props.search.map((search, idx) => {
        return(
            <tr key={idx}>
                <td>{search.name}</td>
                <td>{search.summary}</td>
                <GameCoverComponent cover={search.cover}/>
            </tr>
        )
    }) 

    

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {searchResults}
            </tbody>
        </table>
    )
}


export default GameSearchPage;
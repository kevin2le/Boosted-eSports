import React, {Component} from 'react';

const GameSearchPage = (props) => {
    let search = props.search.map((game, idx) =>{
        return(
            <tr key={idx}>
                <td>search.name</td>
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
                {search}
            </tbody>
        </table>
    )
}


export default GameSearchPage;
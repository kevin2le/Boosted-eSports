import React from 'react';
import './HomePage.css';
import {
    Slider,
    Slide
} from 'react-materialize';

const HomePage = (props) => {
    return (
        <div>
            <div>
            </div>
                <div>
                    <Slider id="Slide" className="Slider">
                        <Slide className="img"
                            src="https://i.imgur.com/ll4S4lu.jpg"
                            title="Welcome to Boosted eSports">
                        </Slide>
                        <Slide className="img"
                            src="https://i.imgur.com/c1lOiXQ.jpg?1"
                            title="Checkout Some Awesome eSports events"
                            placement="right">
                        </Slide>
                        <Slide className="img"
                            src="https://i.imgur.com/ZdeNmaQ.jpg"
                            title="New Events?!"
                            placement="left">
                        </Slide>
                    </Slider>
                </div>
        </div>
    )
}

export default HomePage;
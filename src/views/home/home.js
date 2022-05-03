import React from "react";

import Slide from "../../components/slide/slide";

import './home.css'


const Home = () => {
    return (
        <div>
            <Slide />
            <div className="mt-3">
                <div className="card" style={{width: '15rem'}}>
                    <img src="..." className="card-img-top" alt="..." style={{height: '15rem', backgroundColor: 'gray'}}/>
                    <div className="card-body">
                        <p className="card-text">Movie details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
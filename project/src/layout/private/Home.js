import React from 'react';
import NavBar from '../private/components/NavBar'
import './Home.css'


export const Home = () => {

    let welcome = ''
    let quotes = ''
    const date = new Date()
    const time = date.getHours();
    if (time < 12 && time >= 0) {
        welcome = "Good Morning";
        quotes = "ALL GOOD IDEAS START OUT AS BAD IDEAS, THAT’S WHY IT TAKES SO LONG.- Steven Spielberg"
    }
    else if (time >= 12 && time <= 17) {
        welcome = "Good Afternoon";
        quotes = "CINEMA IS A MATTER OF WHAT’S IN THE FRAME AND WHAT’S OUT.- Martin Scorsese"
    }
    else if (time <= 24 && time > 17) {
        welcome = "Good Evening";
        quotes = "CINEMA IS A MIRROR BY WHICH WE OFTEN SEE OURSELVES.- Alejandro Gonzalez Inarritu"
    }

    return (<>
        <NavBar />
        <h4>Find ratings and reviews for the newest movies.</h4>
        {console.log(time)}
        {
            <h3 className="home">{welcome} <br></br>{quotes}<br></br>
            </h3>
        }


    </>
    )
}






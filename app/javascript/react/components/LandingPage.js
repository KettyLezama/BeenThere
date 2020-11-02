import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
    <div>
    <h1>Welcome to BeenThere!</h1>
    <h3>About our Site:</h3>
    <p> BeenThere! organizes pictures in a better format for travelers.  Our site allows you to group your photos by location rather than by date.  It also allows you to look through others' pictures to see if there is a place that you haven’t considered but you would like to go visit.  </p>
    <h3>About Us:</h3>
    <p>The BeenThere! Team met at Launch Academy in March of 2020.  After completing the Launch Academy coursework and while looking for employment we decided to develop a site that included some things that we had not learned while at Launch.   We used the twelve principles for agile software development, even though we were unable to meet in person.</p>
    <img src="https://avatars0.githubusercontent.com/u/62625260?s=460&u=0763ffde83a9f9a3a665f90efc8fd3034eaa250a&v=4"></img>
    <h5>Will Campbell</h5>
    <img src="https://avatars2.githubusercontent.com/u/3981398?s=460&u=8082ad8eb1801d3b3a40722403a4434956558342&v=4"></img>
    <h5>Ketty Lezama</h5>
    <img src="https://avatars2.githubusercontent.com/u/62557508?s=460&u=9eb653e0094051c9044a1bbf4796ad412c083eab&v=4"></img>
    <h5>Robert Perez</h5>
    <Link to={`/CollectionContainer`}>
    <h4>Photo Collection</h4>
    </Link>
    </div>
  )
}

export default LandingPage;
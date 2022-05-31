import React from "react";

//include images into your bundle
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;

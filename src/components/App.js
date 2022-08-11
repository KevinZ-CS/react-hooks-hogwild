import React, { useState } from "react";
import Nav from "./Nav";
import CardBody from "./CardBody";
import hogs from "../porkers_data";
import Filter from "./Filter";


function App() {
	const [greaseFilter, setGreaseFilter] = useState(false)
	const [sortBy, setSortBy] = useState("");

	const hogsDsiplay = hogs.filter(
		(hog) => greaseFilter ? hog.greased: true)
		.sort((hog1, hog2) => {
			if (sortBy === "weight") {
			  return hog1.weight - hog2.weight;
			} 
			else if (sortBy === 'name') {
			  return hog1.name.localeCompare(hog2.name);
			} else return null
		  });

	

	return (
		<div className="App">
			<Nav />
			<Filter greaseFilter={greaseFilter} setGreaseFilter={setGreaseFilter} setSortBy={setSortBy} />
			<CardBody hogsData={hogsDsiplay} />
		</div>
	);
}

export default App;

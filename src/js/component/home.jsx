import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { List } from "./task.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<List />
		</React.Fragment>
	);
};

export default Home;

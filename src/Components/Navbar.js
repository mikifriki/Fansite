import React from 'react';


class Picturebox extends React.Component {

	render() {
		return (
			<div className="Topnav">
				<a className="active" href="/Components/index.html">Home</a>
				<p><a href="https://store.steampowered.com/news/?appids=22340">News</a></p>
				<p><a href="https://store.steampowered.com/app/22340/Call_of_Cthulhu_Dark_Corners_of_the_Earth/">Buy</a></p>
				<p><a href="https://en.wikipedia.org/wiki/Call_of_Cthulhu:_Dark_Corners_of_the_Earth">More info</a></p>
			</div>
		);
	}

}

export default Picturebox;

  
import React from 'react';

var myShows = [
	'The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown. - H.P Lovecraft',
	'We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. - H.P Lovecraft',
	'Ocean is more ancient than the mountains, and freighted with the memories and the dreams of Time. - H.P Lovecraft',
	'Toil without song is like a weary journey without an end. - H.P Lovecraft',
	'The process of delving into the black abyss is to me the keenest form of fascination. - H.P Lovecraft',
	'Ph nglui mglw nafh Cthulhu R lyeh wgah nagl fhtagn. - H.P Lovecraft',
];
var show = myShows[Math.floor(Math.random() * myShows.length)];

class Array1 extends React.Component {

	render() {
		return (
			<q className="Quotes">
				{show}
			</q>
		);
	}

}

export default Array1;
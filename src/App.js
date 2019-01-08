import React, {Component} from 'react';
import './App.css';
import Picturebox from './Components/Navbar';
import Intro from './Components/Introduction';
import Gallery from 'react-grid-gallery';
import About from './Components/Second';
/* import BasicExample from './Basic.js'; */

const IMAGES =
[
	{
		src: 'https://steamuserimages-a.akamaihd.net/ugc/948461489839882132/1033441CF6C4FCA91B3838FFEED04E3E6675D5C8/',
		thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/948461489839882132/1033441CF6C4FCA91B3838FFEED04E3E6675D5C8/',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
    
	},
 
	{
		src: 'https://steamuserimages-a.akamaihd.net/ugc/67871413026588812/7E288064E49967A8EEF44CB2FA3BAC2C87414B61/',
		thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/67871413026588812/7E288064E49967A8EEF44CB2FA3BAC2C87414B61/',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Art'
	},

	{
		src: 'https://steamuserimages-a.akamaihd.net/ugc/967600497899449988/BF8B09C31F2996B66147C95ECC416C8D7AA1178B/',
		thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/967600497899449988/BF8B09C31F2996B66147C95ECC416C8D7AA1178B/',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		/* tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}], */
        
	},

	{
		src: 'https://steamuserimages-a.akamaihd.net/ugc/169282316723931762/CAE752317B43BE5D7D1E397808E8EE832B783211/',
		thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/169282316723931762/CAE752317B43BE5D7D1E397808E8EE832B783211/',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
        
	},

	{
		src: 'https://steamuserimages-a.akamaihd.net/ugc/3332971629863255791/A518D121572F702FA57A61B7DB44F621085A721E/',
		thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/3332971629863255791/A518D121572F702FA57A61B7DB44F621085A721E/',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		/* tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}], */
	},
 
];

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="Appi">
					<Picturebox />	
				</div>
				<header className="App-header">
					<h1 className="App-title"></h1>
					{/* <BasicExample /> */}
				</header>
				
				<div className="New">
					<About />
					<Intro />
					<div className="Ho">
						<Gallery images={IMAGES} />,
					</div>
				</div>
			</div>
		);
	}

}

export default App;

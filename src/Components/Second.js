import React from 'react';


class About extends React.Component {

	render() {
		return (
			<div className="Tops">
				<table>
					<tr>
						<th>About the game</th>
						<th> </th>
					</tr>
					<tr>
						<td>Size:</td>
						<td>2 GB</td>
					</tr>   
					<tr>
						<td>Required Mods:</td>
						<td><a href="http://dcotetools.sucklead.com/2012/10/version-15-available.html">Unofficial patch</a></td>
					</tr>
					<tr>
						<td>Platfroms:</td>
						<td>Original Xbox and Pc</td>
					</tr>
					<tr>
						<td>Based on:</td>
						<td>H.P Lovecraft's "Shadows over Inssmouth"</td>
					</tr>    
					<tr>
						<td>Release Date:</td>
						<td>26.Apr 2006</td>
					</tr>    
            
				</table>    
			</div>
		);
	}

}

export default About;

  


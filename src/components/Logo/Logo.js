import React from "react";
import {Tilt} from 'react-tilt';
import './Logo.css';
import fuel2 from './fuel2.png';
const Logo =() =>{
return (
<div className="ma4 mt0"> 

<Tilt className="Tilt br2 shadow-2 tc" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
 <div className="Tilt-inner pa1"> <img style={{paddingTop: '0px'}}alt = 'logo' src={fuel2}></img> </div>
</Tilt>
</div>

);
}
export default Logo;
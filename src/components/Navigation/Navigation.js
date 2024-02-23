import React from "react";
import './Navigation.css';


const Navigation =({onRouteChange, isSignedIn}) =>{




if(isSignedIn){
    return (
        
<nav className = "">
<ul className="logo">

<li className ="lo f3 link dim black pa3 pointer fw9"><a onClick={()=> onRouteChange('home')} > Coogs Fuel </a></li>

<ul className="logo push f3 link dim black underline pa3 pointer fw9 ">
<li className="push f3 link dim black underline pa3 pointer fw9"><a onClick={()=> onRouteChange('home')}  className="push"> Home </a></li>

<li className="push f3 link dim black underline pa3 pointer fw9"><a onClick={()=> onRouteChange('ClientProfile')}  className="push"> Update Profile </a></li>
<li className="push f3 link dim black underline pa3 pointer fw9"><a onClick={()=> onRouteChange('QuoteHistory')} className="push"> Quote History </a></li>
    
<li className="push f3 link dim black underline pa3 pointer fw9"><a onClick={()=> onRouteChange('GetQuote')} className="push" > Get Fuel Quote </a></li>
<li className="push f3 link dim black underline pa3 pointer fw9"><a onClick={()=> onRouteChange('signout')}  className="push"> Sign Out </a></li>
</ul>
</ul>
</nav>


);
}else{
return(
<nav style={{display:'flex', justifyContent: 'flex-end'}}>
    <li   onClick={()=> onRouteChange('signin')} className='logo push f3 link  underline pa3 pointer fw9 white' > Sign In </li>
    <li onClick={()=> onRouteChange('register')} className='logo f3 link dim black underline pa3 pointer fw9 white ' > Register </li>

</nav>

);
}

}
export default Navigation;
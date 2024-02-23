import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank  from './components/Rank/Rank';
import Signin  from './components/Signin/Signin';
import Register  from './components/Register/Register';
import './App.css';
import ClientProfile  from './components/ClientProfile/ClientProfile';
import GetQuote  from './components/GetQuote/GetQuote';
import QuoteHistory  from './components/QuoteHistory/QuoteHistory';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      
      
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
        

      }
    }
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }



  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }
 
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }
     else if (route === 'home') {
      this.setState({isSignedIn: true})
    }else if (route === 'ClientProfile') {
      this.setState({isSignedIn: true})
    }

    this.setState({route: route});
  }

  render(){
   const  {isSignedIn, route, box} =this.state;
  return (
    <div className='App'>
     


     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>

     {this.state.route === 'home'
     ? <div>
      
    <Logo />
      <Rank name={this.state.user.name}
                entries={this.state.user.entries}/>
      <ImageLinkForm onInputChange={this.onInputChange}  />
     
     
      </div>

    :(
      this.state.route ==='signin'
      ? <Signin  onRouteChange={this.onRouteChange}/> 
      :this.state.route ==='signout'
       ?<Signin onRouteChange={this.onRouteChange}/>
       :this.state.route ==='ClientProfile'
       ?<ClientProfile onRouteChange={this.onRouteChange}/>
       :this.state.route ==='GetQuote'
       ?<GetQuote onRouteChange={this.onRouteChange}/>
       :this.state.route ==='QuoteHistory'
       ?<QuoteHistory onRouteChange={this.onRouteChange}/>

      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    )
    



  }
    </div>
  );
  }
}

export default App;

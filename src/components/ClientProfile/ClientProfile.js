import React, { useState } from 'react';
import './ClientProfile.css';

// const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
//const ClientProfile = ({ name, entries }) => {
     
    class ClientProfile extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            address: '',
            states:[
                { id: 1, name: 'Alabama', abbreviation: 'AL' },
                
            ],
            selectedState:'',

            
          };
        }


   saveClient = () => {
    // Implement saving logic here
    alert('Client information saved!');
  }

  cancel = () => {
    // Implement canceling logic here
    alert('Operation canceled.');
  }
  onSubmitSignIn = () => {
    

    this.props.onRouteChange('home');
} 
handleSaveAndRouteChange = () => {
    this.saveClient();
    this.props.onRouteChange('home');
  }
  onAddressChange = (event) => {
    this.setState({address: event.target.value})
  }

  render() {

    const { onRouteChange } = this.props;
    return(
    <div>
     
    </div>
  );
}

}

export default ClientProfile;
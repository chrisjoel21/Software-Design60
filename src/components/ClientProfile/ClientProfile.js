import React, { useState } from 'react';
import './ClientProfile.css';

// const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
//const ClientProfile = ({ name, entries }) => {
  //code me
     
    class ClientProfile extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            address: '',
            states:[
                { id: 1, name: 'Alabama', abbreviation: 'AL' },
                { id: 2, name: 'Alaska', abbreviation: 'AK' },
                { id: 3, name: 'Arizona', abbreviation: 'AZ' },
                { id: 4, name: 'Arkansas', abbreviation: 'AR' },
                { id: 5, name: 'California', abbreviation: 'CA' },
                { id: 6, name: 'Colorado', abbreviation: 'CO' },
                { id: 7, name: 'Connecticut', abbreviation: 'CT' },
                { id: 8, name: 'Delaware', abbreviation: 'DE' },
                { id: 9, name: 'Florida', abbreviation: 'FL' },
                { id: 10, name: 'Georgia', abbreviation: 'GA' },
                { id: 11, name: 'Hawaii', abbreviation: 'HI' },
                { id: 12, name: 'Idaho', abbreviation: 'ID' },
                { id: 13, name: 'Illinois', abbreviation: 'IL' },
                { id: 14, name: 'Indiana', abbreviation: 'IN' },
                { id: 15, name: 'Iowa', abbreviation: 'IA' },
                { id: 16, name: 'Kansas', abbreviation: 'KS' },
                { id: 17, name: 'Kentucky', abbreviation: 'KY' },
                { id: 18, name: 'Louisiana', abbreviation: 'LA' },
                { id: 19, name: 'Maine', abbreviation: 'ME' },
                { id: 20, name: 'Maryland', abbreviation: 'MD' },
                { id: 21, name: 'Massachusetts', abbreviation: 'MA' },
                { id: 22, name: 'Michigan', abbreviation: 'MI' },
                { id: 23, name: 'Minnesota', abbreviation: 'MN' },
                { id: 24, name: 'Mississippi', abbreviation: 'MS' },
                { id: 25, name: 'Missouri', abbreviation: 'MO' },
                { id: 26, name: 'Montana', abbreviation: 'MT' },
                { id: 27, name: 'Nebraska', abbreviation: 'NE' },
                { id: 28, name: 'Nevada', abbreviation: 'NV' },
                { id: 29, name: 'New Hampshire', abbreviation: 'NH' },
                { id: 30, name: 'New Jersey', abbreviation: 'NJ' },
                { id: 31, name: 'New Mexico', abbreviation: 'NM' },
                { id: 32, name: 'New York', abbreviation: 'NY' },
                { id: 33, name: 'North Carolina', abbreviation: 'NC' },
                { id: 34, name: 'North Dakota', abbreviation: 'ND' },
                { id: 35, name: 'Ohio', abbreviation: 'OH' },
                { id: 36, name: 'Oklahoma', abbreviation: 'OK' },
                { id: 37, name: 'Oregon', abbreviation: 'OR' },
                { id: 38, name: 'Pennsylvania', abbreviation: 'PA' },
                { id: 39, name: 'Rhode Island', abbreviation: 'RI' },
                { id: 40, name: 'South Carolina', abbreviation: 'SC' },
                { id: 41, name: 'South Dakota', abbreviation: 'SD' },
                { id: 42, name: 'Tennessee', abbreviation: 'TN' },
                { id: 43, name: 'Texas', abbreviation: 'TX' },
                { id: 44, name: 'Utah', abbreviation: 'UT' },
                { id: 45, name: 'Vermont', abbreviation: 'VT' },
                { id: 46, name: 'Virginia', abbreviation: 'VA' },
                { id: 47, name: 'Washington', abbreviation: 'WA' },
                { id: 48, name: 'West Virginia', abbreviation: 'WV' },
                { id: 49, name: 'Wisconsin', abbreviation: 'WI' },
                { id: 50, name: 'Wyoming', abbreviation: 'WY' }
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
      <header className="bg-dark text-white text-center py-4">
        <h1>Client Information Management</h1>
      </header>

      <div className="container mt-4 center" >
        <form id="clientForm ">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" maxLength="50" required />

          <label htmlFor="address1">Address 1:</label>
          <input onChange={this.onAddressChange} type="text" id="address1" name="address1" maxLength="100" required />

          <label htmlFor="address2">Address 2:</label>
          <input type="text" id="address2" name="address2" maxLength="100" />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" maxLength="100" required />

          <label htmlFor="state">State:</label>
          <select id="state" name="state" required onChange={(e) => this.setState({ selectedState: e.target.value })}>
              <option value="" disabled selected>Select State</option>
              {this.state.states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            
          </select>

          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zipCode" name="zipCode" pattern="[0-9]{5,9}" title="Enter at least 5 digits" required />

          <button type="button" onClick={this.handleSaveAndRouteChange} >Save</button>
          <button type="button" className="cancel" onClick={this.cancel}>Cancel</button>
         
        </form>
      </div>
    </div>
  );
}

}

export default ClientProfile;

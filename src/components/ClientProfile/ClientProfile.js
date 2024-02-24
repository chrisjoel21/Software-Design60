import React, { useState } from 'react';
import './ClientProfile.css';
import ProfileValidation from './ProfileValidation';
// const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
//const ClientProfile = ({ name, entries }) => {
  //code me
     
    class ClientProfile extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            fullname:'',
            address1:'',
            address2:'',
            city:'',
            zipcode:'',
            errors: {},



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
  onSubmitSignIn = (event) => {
    event.preventDefault();
    const errors = ProfileValidation(this.state); // Call Validation function with current state
    this.setState({ errors }); // Update errors state
    if (Object.values(errors).every(error => error === "")) { // Check if all errors are empty
      this.props.onRouteChange('home');
    }

  
} 
handleSaveAndRouteChange = (event) => {
   // this.saveClient();
    event.preventDefault();
    const errors = ProfileValidation(this.state); // Call Validation function with current state
    this.setState({ errors }); // Update errors state
    if (Object.values(errors).every(error => error === "")) { // Check if all errors are empty
      this.props.onRouteChange('home');
    }
  }
  
  onAddress1Change = (event) => {
    this.setState({address1: event.target.value})
  }
  
  onAddress2Change = (event) => {
    this.setState({address2: event.target.value})
  }
  onFullNameChange = (event) => {
    this.setState({fullname: event.target.value})
  }
  onCityChange = (event) => {
    this.setState({city: event.target.value})
  }
  onZipCodeChange = (event) => {
    this.setState({zipcode: event.target.value})
  }
  onProvinceChange = (event) => {
    this.setState({selectedState: event.target.value})
  }


  render() {
    const { errors } = this.state;
    const { onRouteChange } = this.props;
    return(
    <div>
      <header className="bg-dark text-white text-center py-4">
        <h1>Client Information Management</h1>
      </header>

      <div className="container mt-4 center" >
        <form id="clientForm ">
          <label htmlFor="fullName">Full Name:</label>
          <input onChange={this.onFullNameChange} type="text" id="fullName" name="fullName" maxLength="50" required />
          {errors.fullname && <p className="error">{errors.fullname}</p>}{" "}
                {/* Display email error */}    
          <label htmlFor="address1">Address 1:</label>
          <input onChange={this.onAddress1Change} type="text" id="address1" name="address1" maxLength="100" required />
          {errors.address1 && <p className="error">{errors.address1}</p>}{" "}
                {/* Display email error */} 
          <label htmlFor="address2">Address 2:</label>
          <input onChange={this.onAddress2Change} type="text" id="address2" name="address2" maxLength="100" />
          {errors.address2 && <p className="error">{errors.address2}</p>}{" "}
                {/* Display email error */} 
          <label htmlFor="city">City:</label>
          <input onChange={this.onCityChange} type="text" id="city" name="city" maxLength="100" required />
          {errors.city && <p className="error">{errors.city}</p>}{" "}
                {/* Display email error */} 
          <label htmlFor="state">State:</label>
          <select id="state" name="state" required onChange={(e) => this.setState({ selectedState: e.target.value })}>
              <option value="" disabled selected>Select State</option>
              {this.state.states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.abbreviation}
                </option>
              ))}
            
          </select>
          {errors.state && <p className="error">{errors.state}</p>}{" "}
                {/* Display email error */} 

          <label htmlFor="zipCode">Zip Code:</label>
          <input onChange={this.onZipCodeChange} type="text" id="zipCode" name="zipCode" pattern="[0-9]{5,9}" title="Enter at least 5 digits" required />
          {errors.zipcode && <p className="error">{errors.zipcode}</p>}{" "}
                {/* Display email error */} 
          <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
             
          <button type="button" className="cancel" onClick={this.cancel}>Cancel</button>
         
        </form>
      </div>
    </div>
  );
}

}

export default ClientProfile;

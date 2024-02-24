function ProfileValidation(values) {
    let error = {};
  
    if (values.fullname === "") {
      error.fullname = "Full Name should not be empty";
    } else if (values.fullname.length > 100) {
      error.fullname = "Address 1 should not exceed 100 characters";
    } else {
      error.fullname = "";
    }
  
    if (values.address1 === "") {
      error.address1 = "Address 1 should not be empty";
    } else if (values.address1.length > 100) {
      error.address1 = "Address 1 should not exceed 100 characters";
    } else {
      error.address1 = "";
    }
  
    if (!values.selectedState) {
      error.state = "State is required";
    }
  
    if (values.city === "") {
      error.city = "City should not be empty";
    } else {
      error.city = "";
    }
  
    if (values.zipcode === "") {
      error.zipcode = "Zip Code should not be empty";
    } else if (!/^\d{5,9}$/.test(values.zipcode.trim())) {
      error.zipcode = "Invalid Zip Code";
    } else {
      error.zipcode = "";
    }
  
    return error;
  }
  
  export default ProfileValidation;
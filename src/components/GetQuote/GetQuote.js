import React from 'react';

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallonsRequested: '',
      deliveryDate: '', // change to string to hold date input
      // Add any other necessary state variables here
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.props.onRouteChange('ClientProfile');
  };

  render() {
    const { gallonsRequested, deliveryDate } = this.state;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="">
          <h1>GET A QUOTE</h1>
        </div>
      </article>
    );
  }
}

export default GetQuote;
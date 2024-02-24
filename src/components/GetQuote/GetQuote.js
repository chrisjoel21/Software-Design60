/*GetQuote.js*/
import React from 'react';
//code

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
    this.props.onRouteChange('home');
  };
  componentDidMount() {
    // Set minimum date to today's date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('deliveryDate').min = today;

    // Calculate maximum date (3 years from today)
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 3);
    const maxDateString = maxDate.toISOString().split('T')[0];

    // Set maximum date
    document.getElementById('deliveryDate').max = maxDateString;
}
  render() {
    const { gallonsRequested, deliveryDate } = this.state;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="">
          <h1>GET A NEW QUOTE</h1>
          <form onSubmit={this.onSubmitSignIn}>
            <label htmlFor="gallonsRequested">Gallons Requested:</label>
            <input
              type="number"
              id="gallonsRequested"
              name="gallonsRequested"
              value={gallonsRequested}
              onChange={this.handleInputChange}
              required
            />

            <div>
              <label>Delivery Address:</label>
              {/* Display client profile delivery address here */}
              <p>Client Profile Delivery Address</p>
            </div>

            <div>
              <label>Delivery Date:</label>
              <input
              type="date"
                 id="deliveryDate"
                 name="deliveryDate"
                 value={deliveryDate}
                
                onChange={this.handleInputChange}
                required 
                min="today"

              />

            </div>

            <div>
              <label>Suggested Price / Gallon:</label>
              <input
                type="number"
                id="suggestedPrice"
                name="suggestedPrice"
               // value={/* Add logic to calculate suggested price */}
                readOnly
              />
            </div>

            <div>
              <label>Total Amount Due:</label>
              <input
                type="number"
                id="totalAmountDue"
                name="totalAmountDue"
              //  value={/* Add logic to calculate total amount due */}
                readOnly
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
    );
  }
}

export default GetQuote;

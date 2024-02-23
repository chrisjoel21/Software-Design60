import React from 'react';
import './QuoteHistory.css'

class QuoteHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  

  

  render() {
    return (
      

       <div class='containerQuote center'>
       <body>
          <h1>Quote History</h1>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Gallons Requested</th>
                <th>Delivery Address</th>
                <th>Delivery Date</th>
                <th>Price/Gallon</th>
                <th>Total Amount Due</th>
              </tr>
            </thead>
      
            <tbody>
              <tr>
                <td>XYZ</td>
                <td>5</td>
                <td>Elgin Street</td>
                <td>May 10</td>
                <td>N/A</td>
                <td>200$</td>
              </tr>
      
            </tbody>
      
          </table>
        </body>
       </div>
    
        
      
    );
  }
}

export default QuoteHistory;
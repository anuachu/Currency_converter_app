import React from 'react'
import './CreditCardInput.css';





class CreditCard extends React.Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "",
    cardCVV: "",
    cardType: "💳",
    creditcard: [],
    balance: 0,
    show: 'block',
    message: ''

  }

  componentDidMount() {
    fetch('/api/currency')
     .then(res => res.json())
     .then(res => this.setState({
      creditcard: res
     }))
  }

  // componentDidMount() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers:
  //   }
  // }

  

  setCardType = type => {
    this.setState({ cardType: type });
  };

  checkSubstring = (length, match) => {
    return this.state.cardNumber.substring(0, length) === match;
  };

  setNumber = e => {
    const cardNumber = e.target.value;
    this.setState({ cardNumber }, () => {
      const { cardNumber } = this.state;
      if (cardNumber[0] === "4") {
        this.setCardType("Visa");
      } else if (this.checkSubstring(4, "6011")) {
        this.setCardType("Discover");
      } else if (this.checkSubstring(2, "51")) {
        this.setCardType("MasterCard");
      } else if (this.checkSubstring(2, "34")) {
        this.setCardType("American Express");
      } else if (this.checkSubstring(3, "300")) {
        this.setCardType("Diners Club");
      } else if (this.checkSubstring(2, "35")) {
        this.setCardType("JCB");
      } else {
        this.setCardType("💳");
      }
    });
  };

  setName = e => {
    const cardHolderName = e.target.value.toUpperCase();
    this.setState({ cardHolderName });
  };

  setDate = e => {
    let data = (e.target.value).split("");
    console.log(data)
    let cardExpirationDate = (data.map((x) => {
      return x === "-" ? "/" : x
    })).join("");
    console.log(cardExpirationDate)
    this.setState({ cardExpirationDate });
  };

  setCVV = e => {
    const cardCVV = e.target.value;
    this.setState({ cardCVV });
  };

  handleSubmit= ()=> {
   console.log(this.state)
  }

 handleClick = e => {
    const { show, message } = this.state

    if(show === 'block'){
      this.setState({ show: 'none',message: 'Payment Success' })
    }else {
      this.setState({ show: 'block'})
    }
  }
  
 
  render() {
    const {
      cardNumber,
      cardHolderName,
      cardExpirationDate,
      cardCVV,
      cardType,
      balance,
      show,
      message
    } = this.state;
    
    return (
      <div>
      <div className="container" style={{display: show, overlay: "180px"}}>
        <div className="credit-card">
          <div className="credit-card-inner">
            <div className="credit-card-front">
              
              <div id="card-type">{cardType}</div>
              <div id="card-number">{cardNumber}</div>

              <div id="card-expiration">
                {cardExpirationDate !== "" && <div id="validthru">Valid Thru</div>}
                {cardExpirationDate}
              </div>

              <div id="card-holder-name">{cardHolderName}</div>
            </div>
            <div className="credit-card-back">
              <div className="card-stripe" />
              <div className="card-sig-container">
                <div className="signature">{cardHolderName}</div>
                CVC {cardCVV}
              </div>
              
            </div>
          </div>
        </div>
        <div className="card-form">
          <label className="input-label">Credit Card Number</label>
          <input
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            id="number-input"
            name="number-input"
            className="text-input"
            maxLength="16"
            onChange={this.setNumber}
          />
          <label className="input-label">Card Holder Name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            value={cardHolderName}
            onChange={e => this.setName(e)}
            className="text-input"
            maxLength="30"
          />
          <div className="date-and-csv" style={{ display: "flex" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="input-label">
                Expiration Date
              </label>
              <input
                type="month"
                placeholder="Enter expiration date"
                className="text-input"
                onChange={e => this.setDate(e)}
                style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="input-label">CVC Security Code</label>
              <input
                options={{
                  numeral: "true"
                }}
                placeholder="Enter CVV"
                maxLength="3"
                value={cardCVV}
                className="text-input"
                onChange={e => this.setCVV(e)}
              />
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <ul>
          {/* {this.state.creditcard.map(array => {
            <li>{array.cardHolderName}</li>
          })} */}
          {this.state.creditcard.map((person, index) => (
        <div className="credit"> {person.cardholdername}  <br/> 
            {person.cardnumber}<br/>
            {person.cardtype}<br/>
             Balance: {balance}
            <input type="text" onChange={this.handleChange}/>
            <div className='buttondiv'>
            <button onClick={() => this.setState({ balance: this.state.balance + 100})}>Add Money</button>
            <br/>
            <button onClick={this.handleClick}>Proceed to pay</button>
            </div>
        </div>))}
        </ul>
    </div>
    
    <h1>{message}</h1>
    </div>
     
    );
  }
}


export default CreditCard;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Output from './Output';
import "./Payment_style.css"
const PaymentGateway = ({totalPrice}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentResult, setPaymentResult] = useState(false);

  const handlePayment = async () => {
    setPaymentResult(true)
  }

  return (<>
    {paymentResult && <Output/>}
      
      { !paymentResult &&
    <div style={{display:"flex",justifyContent:"center",padding:"2%"}} >
      <div style={{width:"25rem", textAlign: 'center', marginTop: '20px',marginBottom:"" ,backgroundColor:"lightgrey",borderRadius:"10px",padding:"5%"}}>
      <h1>Payment </h1>
<div style={{marginRight:"5%"}}>amount -:{totalPrice}Rs</div>
      <div>
        <label >
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            // style={{ marginRight: '13%' }}
          />
        </label>
      </div>

      <div>
        <label >
          Expiration:
          <input
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            // style={{ marginRight: '8%',marginLeft:'4%' }}
          />
        </label>
      </div>

      <div>
        <label >
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            // style={{ marginRight: '5%', marginLeft:"9%" }}
          />
        </label>
        </div>
     
      <div style={{display:"flex",gap: '6rem'}}>
      <button
        disabled={ !cardNumber || !expiration || !cvv}
        onClick={handlePayment}
        style={{
          width:"5rem",
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      <NavLink to="/">
              
      <button
        style={{
          width:"5rem",
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >Cancel</button>      
      </NavLink>
      </div>
      </div>
      
    </div>
      }
      </>
  );
};

export default PaymentGateway;
// import React, { useState } from 'react';
// import { CardElement, injectStripe } from 'react-stripe-elements';

// const PaymentGateway = ({ stripe }) => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiration, setExpiration] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [processing, setProcessing] = useState(false);
//   const [paymentResult, setPaymentResult] = useState('');

//   const handlePayment = async () => {
//     setProcessing(true);

//     // Create a token using the Stripe instance
//     const { token, error } = await stripe.createToken({
//       card: {
//         number: cardNumber,
//         exp_month: expiration.split('/')[0],
//         exp_year: expiration.split('/')[1],
//         cvc: cvv,
//       },
//     });

//     if (error) {
//       console.log(error);
//       setProcessing(false);
//       setPaymentResult('Payment failed. Please try again.');
//       return;
//     }

//     console.log(token);

//     // Simulate payment processing delay
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     // Simulate payment result
//     const isSuccess = Math.random() < 0.5; // 50% chance of success

//     setProcessing(false);
//     setPaymentResult(isSuccess ? 'Payment successful!' : 'Payment failed. Please try again.');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>Fake Payment Gateway</h1>

//       <div>
//         <label style={{ marginRight: '10px' }}>
//           Card Number:
//           <input
//             type="text"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             style={{ marginLeft: '10px' }}
//           />
//         </label>
//       </div>

//       <div>
//         <label style={{ marginRight: '10px' }}>
//           Expiration (MM/YY):
//           <input
//             type="text"
//             value={expiration}
//             onChange={(e) => setExpiration(e.target.value)}
//             style={{ marginLeft: '10px' }}
//           />
//         </label>
//       </div>

//       <div>
//         <label style={{ marginRight: '10px' }}>
//           CVV:
//           <input
//             type="text"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             style={{ marginLeft: '10px' }}
//           />
//         </label>
//       </div>

//       <button
//         disabled={processing || !cardNumber || !expiration || !cvv}
//         onClick={handlePayment}
//         style={{
//           marginTop: '10px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           padding: '8px 16px',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         {processing ? 'Processing...' : 'Submit Payment'}
//       </button>

//       {paymentResult && <p style={{ marginTop: '10px' }}>{paymentResult}</p>}
//     </div>
//   );
// };

// export default injectStripe(PaymentGateway);


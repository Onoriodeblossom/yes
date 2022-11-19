import React from 'react';
import { PaystackButton } from 'react-paystack';


const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 500000,
  publicKey: 'pk_test_70ea7e0019ec64ae118c17b2ebdac7ce65368caa',
};

export const Paystack=()=> {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Donate',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="App">
      <PaystackButton style={{color:"red"}} {...componentProps} />
    </div>
  );
}

export default Paystack;




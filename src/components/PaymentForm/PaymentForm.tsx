import { TextField } from "@material-ui/core";
import React from "react";
import Cards, { Focused } from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import MaskedCreditCardNumberInput from "./MaskedCreditCardNumberInput";
import MaskedExpiryInput from "./MaskedExpiryInput";
import MaskedCvcInput from "./MaskedCvcInput";

const PaymentForm = () => {
  const [cvc, setCvc] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [focus, setFocus] = React.useState<Focused>("number");
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  //TODO try DRY
  const CreditCardInput: any = MaskedCreditCardNumberInput;
  const ExpiryInput: any = MaskedExpiryInput;
  const CvcInput: any = MaskedCvcInput;

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    //TODO solve this type error
    //setFocus(e.target.name);
  };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={cvc}
        expiry={expiry}
        name={name}
        number={number}
        focused={focus}
      />
      <form>
        <TextField
          name="number"
          id="number"
          label="Card Number"
          variant="outlined"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          onFocus={handleInputFocus}
          InputProps={{
            inputComponent: CreditCardInput,
          }}
          fullWidth
        />
        <TextField
          name="name"
          id="name"
          label="Full Name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={handleInputFocus}
          fullWidth
        />
        <TextField
          name="expiry"
          id="expiry"
          label="Expiration Date"
          variant="outlined"
          onChange={(e) => {
            setExpiry(e.target.value);
          }}
          onFocus={handleInputFocus}
          InputProps={{
            inputComponent: ExpiryInput,
          }}
        />

        <TextField
          name="cvc"
          id="cvc"
          label="CVC"
          variant="outlined"
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          onFocus={handleInputFocus}
          InputProps={{
            inputComponent: CvcInput,
          }}
        />
      </form>
    </div>
  );
};

export default PaymentForm;

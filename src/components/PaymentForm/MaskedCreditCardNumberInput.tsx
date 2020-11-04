import React from "react";
import MaskedInput from "react-text-mask";

interface MaskedCreditCardNumberInputProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export default function MaskedCreditCardNumberInput(
  props: MaskedCreditCardNumberInputProps
) {
  const { inputRef, ...others } = props;

  return (
    <MaskedInput
      {...others}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /[1-9]/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      showMask
    />
  );
}

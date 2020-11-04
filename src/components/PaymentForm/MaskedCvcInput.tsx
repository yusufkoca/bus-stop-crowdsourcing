import React from "react";
import MaskedInput from "react-text-mask";

interface MaskedCvcInputProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export default function MaskedCvcInput(props: MaskedCvcInputProps) {
  const { inputRef, ...others } = props;

  return (
    <MaskedInput
      {...others}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /\d/, /\d/]}
      showMask
    />
  );
}

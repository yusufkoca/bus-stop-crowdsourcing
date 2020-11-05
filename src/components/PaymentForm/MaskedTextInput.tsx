import React, { ReactElement } from "react";
import MaskedInput from "react-text-mask";

interface MaskedTextInputProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  mask: any[];
}

export default function MaskedTextInput(
  props: MaskedTextInputProps
): ReactElement {
  const { inputRef, mask, ...others } = props;

  return (
    <MaskedInput
      {...others}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      showMask
    />
  );
}

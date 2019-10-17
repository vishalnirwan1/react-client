import React from "react";
import validField, { errorField } from "./style";

function TextField(props) {
  // console.log('>>>>>>>>', props);
  if (props.value) {
    return (
      <span>
                A valid TextField:
        <br />
        <input type="text" style={validField}>
        </input>
        <br />
      </span>
    )
  }
  else if (props.disabled) {
    return (
      <span>
                This is a Disabled input:
        <br />
        <input type="text" style={validField} value="Disabled Input" disabled={props.disabled}>
        </input>
        <br />
      </span>
    )
  }

  else if (props.error) {
    return (
      <span>
                An error TextField:
        <br />
        <input type="text" style={errorField}>
        </input>
      </span>

    )
  }
}
export default TextField;
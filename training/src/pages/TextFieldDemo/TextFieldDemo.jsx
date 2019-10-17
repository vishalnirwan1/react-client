import React from "react";
import { TextField, Slider } from "../../components";

function TextFieldDemo(props) {
  return(
    <div>
      <div>
        <Slider 
          altText = "Default Banner"
          banner = {
            [
              "default.png",
              "load-balancer.png",
              "full-stack-web-development.jpg",
              "js.jpg",
              "dns-server.png",
              "cloud.jpg"
            ]
          }
          defaultBannerImage = "default.png"
          height = { 4 }
          duration = { 1 }
          random = { false }
        />
      </div>
      <br />
      <fieldset>
        <TextField value = "valid text field"/>
        <TextField disabled = { true } />
        <TextField error = "error field"/>
      </fieldset>
    </div>
  )
}

export default TextFieldDemo
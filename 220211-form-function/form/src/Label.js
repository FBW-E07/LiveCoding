import { render } from "@testing-library/react"
import { Component } from 'react'


class Label extends Component{
  constructor(props, ref) {
    super(props, ref)
    console.log("props", props, "ref:", ref);
  }  
  
  render() { 
    return (
      <label>
        Input: 
        <input
          type="text"
          value={this.props.text}
          ref={this.ref}
        ></input>
      </label>
    )
  }
}

export default Label
import React, {Component} from 'react';
import './App.css';
// import ResultComponent from './components/ResultComponent'
// import KeyPadComponent from './components/KeypadComponent'

class App extends Component {
  constructor(){
    super()

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate()
    } else if(button === "Clear"){
      this.reset()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }


  render() {
    const buttonArr = ["Clear", "+", "-", "1", "2", "3", "*", "4", "5", "6", "/", "7", "8", "9", "="]
    return (
      <div>
        <div className="calculator-body">
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent className="button" onClick={this.onClick} buttons={buttonArr}/>
        </div>
      </div>
    )
  }
}

const ResultComponent = ({ result }) => {
  return (
    <div className="result">
      <p className="resultText">{result}</p>
    </div>
  )
}

const KeyPadComponent = props => (
  <div className="button">
    {
      props.buttons.map(buttonVal => {
        return <button name={buttonVal} id={"button" + buttonVal} onClick={e => props.onClick(e.target.name)}>{buttonVal}</button>
      })
    }
  </div>
)

export default App;

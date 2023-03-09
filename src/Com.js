import { hasSelectionSupport } from "@testing-library/user-event/dist/utils/edit/selectionRange"
import React  from "react"


function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
           }
        this.changeHandle = this.changeHandle.bind(this)
    }

    changeHandle(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const scale = this.props.scale
        return (
            <label>
                Enter temperature in {scaleNames[scale]}
                <input type="text" value={this.state.temperature} onChange={this.changeHandle}></input>
            </label>
        )
    }
}

class Calculator extends React.Component {

    render() {
        return (
            <fieldset>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </fieldset>
        )
    }
}

class Com extends React.Component{

    render() {
        return <Calculator />  
    }

}

export default Com
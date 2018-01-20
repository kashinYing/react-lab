import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/scss/bootstrap.scss';

const BoilingVerdict = props =>
  props.celsius >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water would not boil.</p>
  );

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => celsius * 9 / 5 + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c',
  };

  handleCelsiusChange = temperature => {
    this.setState({ scale: 'c', temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: 'f', temperature });
  };

  render() {
    const { scale, temperature } = this.state;

    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.querySelector('#root'));

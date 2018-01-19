import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/scss/bootstrap.scss';

// class NameForm extends React.Component {
//   state = { value: '' };

//   handleChange = event => {
//     this.setState({
//       value: event.target.value.toUpperCase(),
//     });
//   };

//   handleSubmit = event => {
//     alert(`A name was submitted: ${this.state.value}`);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label id="name" htmlFor="name">
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<NameForm />, document.querySelector('#root'));

// class EssayForm extends React.Component {
//   state = { value: 'Please write an essay about your favorite DOM element.' };

//   handleChange = event => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     alert(`A essay was submitted: ${this.state.value}`);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label id="name" htmlFor="name">
//           Name:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<EssayForm />, document.querySelector('#root'));

// class FlavorForm extends React.Component {
//   state = { value: 'coconut' };

//   handleChange = event => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     alert(`Your favorite flavor is: ${this.state.value}`);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label id="flavor" htmlFor="flavor">
//           Pick your favorite La Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<FlavorForm />, document.querySelector('#root'));

class Reservation extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2,
  };

  handleInputChange = event => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<Reservation />, document.querySelector('#root'));

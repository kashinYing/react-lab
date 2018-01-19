import React from 'react';
import ReactDOM from 'react-dom';

// const ActionLink = () => {
//   const handleClick = e => {
//     e.preventDefault();
//     console.log('This link was clicked.');
//   };

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// };

// ReactDOM.render(<ActionLink />, document.querySelector('#root'));

// class Toogle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToogleOn: true,
//     };
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log(this);
//     this.setState(prevState => ({
//       isToogleOn: !prevState.isToogleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToogleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// class LoggingButton extends React.Component {
//   handleClick = () => {
//     // console.log(`this is: ${this}`);
//     console.log(this);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }

// ReactDOM.render(<LoggingButton />, document.querySelector('#root'));

class Popper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hello World!',
    };
  }

  preventPop = (name, e) => {
    console.log(e);
    e.preventDefault();
    alert(name);
  };

  render() {
    return (
      <div>
        <p>hello</p>
        <a
          href="https://reactjs.org"
          onClick={e => this.preventPop(this.state.name, e)}
        >
          Click
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Popper />, document.querySelector('#root'));

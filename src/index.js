import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

// const UserGreeting = () => <h1>Welcome back!</h1>;

// const GuestGreeting = () => <h1>Please sign up.</h1>;

// const Greeting = props =>
//   props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

// const LoginButton = props => <button onClick={props.onClick}>Login</button>;

// const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;
// class LoginControl extends React.Component {
//   state = { isLoggedIn: false };

//   handleLoginClick = () => {
//     this.setState({
//       isLoggedIn: true,
//     });
//   };

//   handleLogoutClick = () => {
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

//   render() {
//     const { isLoggedIn } = this.state;
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {isLoggedIn ? (
//           <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<LoginControl />, document.querySelector('#root'));

// const Mailbox = props => {
//   const { unreadMessages } = props;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       )}
//     </div>
//   );
// };

// const messages = ['React', 'Re: React', 'Re:Re: React'];

// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.querySelector('#root'),
// );

const WarningBanner = props =>
  props.warn && <div className="alert alert-danger">Warning!</div>;

class Page extends React.Component {
  state = { showWarning: true };

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning,
    }));
  };

  render() {
    const { showWarning } = this.state;
    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button
          onClick={this.handleToggleClick}
          className={
            showWarning ? 'btn btn-info btn-lg' : 'btn btn-danger btn-lg'
          }
        >
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.querySelector('#root'));

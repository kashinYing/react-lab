import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// const Welcome = props => <h1>Hello, {props.name}!</h1>;

// const App = () => (
//   <div>
//     <Welcome name="Kashin" />
//     <Welcome name="Jiashun" />
//     <Welcome name="Frank" />
//   </div>
// );

// ReactDOM.render(<App />, document.querySelector('#root'));

// Welcome.propTypes = {
//   name: PropTypes.string,
// };

const formatDate = date => date.toLocaleDateString();

const Avatar = props => (
  <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
);

const UserInfo = props => (
  <div>
    <Avatar user={props.user} />
    <div className="UserInfo-name">{props.user.name}</div>
  </div>
);

const Comment = props => (
  <div className="Comment">
    <UserInfo user={props.author} />
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">{formatDate(props.date)}</div>
  </div>
);

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.querySelector('#root'),
);

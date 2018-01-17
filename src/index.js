import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => `${user.firstName} ${user.lastName}`;

const getGreeting = user => {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
};

const user = {
  firstName: 'Kashin',
  lastName: 'Liu',
};

// const element = <h1>Hello, {formatName(user)}!</h1>;\

const element = <h1>{getGreeting()}</h1>;

ReactDOM.render(element, document.querySelector('#root'));

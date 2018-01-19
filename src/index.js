import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

// const numbers = [1, 2, 3, 4, 5];

// const ListItem = props => <li>{props.value}</li>;

// const NumberList = props => {
//   const { numbers } = props;
//   const listItems = numbers.map(number => (
//     <ListItem key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// };

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.querySelector('#root'),
// );

const Blog = props => {
  const { posts } = props;

  const sidebar = (
    <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
  );

  const content = posts.map(post => (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
};

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

ReactDOM.render(<Blog posts={posts} />, document.querySelector('#root'));

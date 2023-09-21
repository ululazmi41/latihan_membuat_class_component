import React from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component created!');
  }

  render() {
    return <p>Hello {this.props.name}!</p>;
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent name="Dicoding" />
    <MyComponent name="Ulul Azmi" />
    <MyComponent name="React" />
  </div>
);
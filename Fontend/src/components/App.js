import React from 'react';
import ButtonManager from './Containers/ButtonManager';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <ButtonManager />
      </div>);
  }
}

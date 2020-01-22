import React from 'react';
import MenuList from './components/MenuList';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    
    }
  }

  render () {
    const items = [
      {
        id: 1,
        nombre: 'Magna.'
      },
      {
        id: 2,
        nombre: 'Et.',
        items: [{
          id: 6,
          nombre: 'Consetetur.'
        }, {
          id: 7,
          nombre: 'By.'
        }]
      },
      {
        id: 3,
        nombre: 'Stet.'
      },
      {
        id: 4,
        nombre: 'Est.',
        items: [{
          id: 8,
          nombre: 'Crime.',
          items: [{
            id: 9,
            nombre: 'Takimata.'
          }, {
            id: 10,
            nombre: 'Loved.'
          }]
        }]
      },
      {
        id: 5,
        nombre: 'Erat.'
      }
    ];
  return ( <div>{JSON.stringify(this.props.datosLocal)}</div>
    
        );
  }
}



export default App;
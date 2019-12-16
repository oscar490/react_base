import React from 'react';
import logo from './logo.svg';
//import './App.css';

// function Viewtitle(texto)
// {
//   return (
//   <h1>{texto.mytext}
//     <p>{texto.subtitle}</p>
//   </h1>
//   );
// }

class Holamundo extends React.Component
{
  state = {
    show: true
  }

  toggleShow = () => {
    if (this.state.show) {
      this.setState({show: false});

    } else {
      this.setState({show: true});
    }
  }

  render() {

    if (this.state.show) {
      return (
        <h1>{this.props.mytext}
        <p>{this.props.subtitle}</p>
        <button onClick={this.toggleShow}>Cambiar estado</button>
        </h1>
        )

    } else {
      return (
        <div>
          <p>No hay elementos</p>
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
        
      )
    }
    
  }
}

function App() {
  return (
    <div>
      < Holamundo mytext="Hola prueba" subtitle="Subtitle prueba"/> 
      < Holamundo mytext="mundo" subtitle="subtitle mundo"/>
    </div>
  )
}

export default App;

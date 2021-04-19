import React, { Component } from 'react';
import './App.css'
import SwaggerUI from 'swagger-ui';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definitionLink: "https://petstore.swagger.io/v2/swagger.json",
    }
  }

  componentDidMount() {
      SwaggerUI({
        domNode: document.getElementById("api-data"),
        url: this.state.definitionLink
      })
  }

  render() {
    return (
      <div className="App">
        <div id="api-data" />
      </div>
    );
  }
}

export default App;

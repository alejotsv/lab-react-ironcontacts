import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }
  

  render() {
    return (
     <div>
       <h1>Iron Contacts</h1>
       <table>
         <tbody>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
          </tr>
          <Display number='100'/>
         </tbody>
       </table>       
     </div>
    );
  }
}

export default App;

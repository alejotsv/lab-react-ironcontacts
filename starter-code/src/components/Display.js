import React from 'react';
import contacts from '../contacts.json';

class Display extends React.Component {
  
  render() {
    let num = parseInt(this.props.number);
    
    let display = () => {
    let table = [];
    for (let i=0; i<num; i++){
      table.push(contacts[i]);
    }
    return table.map((eachContact, index) => {
      return (
        <tr>
          <th><img src={eachContact.pictureUrl} height="200" width="150" /></th>
          <th><h3 key={index}>{eachContact.name}</h3></th>
          <th><h3>{eachContact.popularity}</h3></th>
        </tr>
      );
    });
    }

    return display();

  }
        
}

export default Display;



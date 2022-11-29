import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities,setActivites]=useState([]);  // bierze c# i przerabia na react
  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response=>{  //bierze response i ustawia activities
    
    setActivites(response.data);  //zwarca cala date
    console.log(response);
    })
  },[]);
  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivites'/>
  
        <List>
          {activities.map((activiti: any)=>(
            <List.Item key={activiti.id}>{activiti.title}</List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;

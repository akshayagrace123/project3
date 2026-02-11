import React, { Component } from 'react'
import { data } from 'react-router-dom';
import Course from './Course';

export default class App extends Component {
  constructor(){
    super();
    this.state = {menu:[
      {name:"React Js",duration:"1hr",price:"Rs.60",img:"React.jpeg"},
      {name:"Web development",duration:"1hr",price:"Rs.70",img:"web.jpeg"},
      {name:"Java programming ",duration:"1hr",price:"Rs.130",img:"java.jpeg"},

    ]}
  }
  render() {
    const{menu}=this.state;
    return (
      <div>
        <div className='app'></div>
        <div className='header'>Course Catalog - 2500031963- Akshaya Grace</div>
        <div className='section'>
          {menu.map((data)=>(
            <Course data={data}/>
          ))}
          </div>
          <div className='footer'>Copyright @ 2026.All rights reserved. - Akshaya Grace</div>

      </div>
    )
  }
}
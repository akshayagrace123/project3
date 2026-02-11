import React, { Component } from 'react'

export default class Course extends Component {
  render() {
    const {data}=this.props;
    const BASEURL = import.meta.env.BASE_URL;
    return (
      <div className='course'>
                <img src={BASEURL + data.img} alt='' />
                <h3>{data.name}</h3>
                <p>
                    <span>Price</span>
                    <span>{data.price}</span>
                </p>
                <p>
                    <span>Duration</span>
                    <span>{data.Duration}</span>
                </p>
                
            </div>
        );
    }
}
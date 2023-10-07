import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='myitem'>
        <img src={'./img/' + this.props.item.img}/>
        <h1>{this.props.item.title}</h1>
        <b>{this.props.item.price +' ₽'}</b>
      </div>
    )
  }
}

export default Order
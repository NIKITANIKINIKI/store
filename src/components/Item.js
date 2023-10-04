import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img}/>
        <h1>{this.props.item.title}</h1>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price +' ₽'}</b>
        <div className='add-to-card'>+</div>
      </div>
    )
  }
}

export default Item
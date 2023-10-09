import React, { Component } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'


export class Order extends Component {
  render() {
    return (
      <div className='myitem'>
        <img src={'./img/' + this.props.item.img}/>
        <h1>{this.props.item.title}</h1>
        <b>{this.props.item.price +' ₽'}</b>
        <AiOutlineDelete className='delete-shop' onClick={()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order
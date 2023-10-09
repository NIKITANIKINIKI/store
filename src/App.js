import Footer from "./components/Footer";
import Header from "./components/Header";
import React from 'react'
import Items from "./components/Items";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      myShop:[],
      items:[
        {
          id:1,
          title: 'Table',
          img: 'table.webp',
          desc: "It's a beautiful table",
          category:'tables',
          price: '10000'
        },
        {
          id:2,
          title: 'Table',
          img: 'white_table.jpg',
          desc: "It's a beautiful table",
          category:'tables',
          price: '10000'
        },
        {
          id:3,
          title: 'Table',
          img: 'table.webp',
          desc: "It's a beautiful table",
          category:'tables',
          price: '10000'
        },
        {
          id:4,
          title: 'Table',
          img: 'white_table.jpg',
          desc: "It's a beautiful table",
          category:'tables',
          price: '10000'
        },
        
      ]
    }
    this.addMyShop=this.addMyShop.bind(this)
    this.deleteShop=this.deleteShop.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header myShop={this.state.myShop} onDelete={this.deleteShop}/>
        <Items items={this.state.items} onAdd={this.addMyShop}/>
        <Footer/>
      </div>
    )
  }

  deleteShop(id){
    this.setState({myShop: this.state.myShop.filter(el => el.id!==id)})
  }


  addMyShop(item){
    let IsInArray=false 
    this.state.myShop.forEach(el =>{
      if(el.id===item.id){
        IsInArray=true
      }
    })
    if(!IsInArray){
      this.setState({myShop:[...this.state.myShop, item]})
    }
    
  }
;
}

export default App;

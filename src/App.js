import Footer from "./components/Footer";
import Header from "./components/Header";
import React from 'react'
import Items from "./components/Items";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
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
  }
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
      </div>
    )
  }
;
}

export default App;

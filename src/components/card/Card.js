// import React from 'react'
import './card.css'
// function Card({name,price,url}) {
//   return (
//     <div className='card-Container'>
//         <div>
//             <img className='Card-Image' src={url} alt='pic'/>
//         </div>
//         <div className='card-para'>
//         <h4>Name: {name}</h4>
//         <p>price: {price}</p>
//         </div>
//         <div className='buy-Product'>
//             <button>Buy</button>
//         </div>
//     </div>
//   )
// }
import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props){
    super(props)
    this.state={
      name:props.item.name ,
      price:props.item.price,
      url:props.item.url
    }
  }
  render() {
    return (
      <div className='card-Container'>
         <div>
             <img className='Card-Image' src={this.state.url} alt='pic'/>
         </div>
         <div className='card-para'>
         <h4>{this.state.name}</h4>
         <p>&#8377;{this.state.price}</p>
         </div>
         <div className='buy-Product'>
             <button>View</button>
         </div>
     </div>
    )
  }
}


// export default Card

import React, { Component } from 'react'
import Card from '../card/Card'
import './cardContainer.css' 
import {products} from '../../data'

// function CardContainer() {
//   return (
//     <div>
//       <h2 className='title'>Products</h2>
//       <div className='underLine'></div>
//       <div className='cardOuter-Container'>
//       {
//          products.map((item,ind)=>{
//            return <Card key={ind} {...item}/>
//          })
//        } 
//       </div>
       
//     </div>
//   )
// }


export default class CardContainer extends Component {
  render() {
    return (
      <div>
       <h2 className='title'>Products</h2>
       <div className='underLine'></div>
       <div className='cardOuter-Container'>
       {
         products.map((item,ind)=>{
           return <Card key={ind} item={item}/>
         })
       } 
      </div>
       
    </div>

    )
  }
}

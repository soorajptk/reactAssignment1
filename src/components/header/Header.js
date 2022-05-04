import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './header.css'
// function Header() {
//   return (
//       <div className='Header-Container'>
//           <div className='Header'>
//         <h2>Shopping</h2>
//          <input type={"text"} placeholder={'Search'} />
//         <Cart className='cart-Icon'/>
//     </div>
//       </div>
    
//   )
// }


export default class Header extends Component {
  render() {
    return (
            <div className='Header-Container'>
          <div className='Header'>
        <h2>Shopping</h2>
         <input type={"text"} placeholder={'Search'} />
        <FontAwesomeIcon className='cart-Icon' icon={faCartShopping}/>
    </div>
      </div>

      )
  }
}


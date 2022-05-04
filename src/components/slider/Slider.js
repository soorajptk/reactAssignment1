// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'

import {sliderImages} from '../../data'
// function Slider() {
//   return (
//     <div>
//     <Carousel className='carousel'>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 slider-img"
//             src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 slider-img"
//             src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 slider-img"
//             src="https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>    
//     </div>
    
//   )
// }

// export default Slider
import React, { Component } from 'react'

export default class Slider extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  checkIndex(check){
    if(check==="inc")
    {
      this.state.count<sliderImages.length-1?this.setState({count:this.state.count+1}):this.setState({count:0})
    }
    if(check==="dec"){
      this.state.count>0?this.setState({count:this.state.count-1}):this.setState({count:sliderImages.length-1})

    }
  }
  render() {
   
    return (
      <div className="slider-InnerContainer">
        <img  className="slider-img" src={sliderImages[this.state.count].url} alt="slider"/>
        <h2 className="slider-Text">{sliderImages[this.state.count].text}</h2>
        <FontAwesomeIcon onClick={()=>this.checkIndex("dec")} className="leftArrow" icon={faArrowLeft}/>
        <FontAwesomeIcon onClick={()=>this.checkIndex("inc")} className="rightArrow" icon={faArrowRight}/>
      </div>
      )
  }
}

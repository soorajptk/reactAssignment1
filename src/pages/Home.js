import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../components/slider/Slider";
import CardContainer from '../components/cardContainer/CardContainer'

function Home() {
  return (
    <div>
    <Slider/>      
    <CardContainer/>
    </div>
  );
}

export default Home;


import React from 'react'
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Carrousel from './components/Carrousel';
import './styles/style.scss'
import imgItem1 from './styles/assets/slider1.png';
import imgItem2 from './styles/assets/slider2.png';
import imgItem3 from './styles/assets/slider3.png';
import imgItem4 from './styles/assets/slider4.jpg';


const App = () =>{
  const farmsSlider = [
    { bgImg: imgItem1,
    title: "Welcome To TenTwenty Farms",
    sub_title: "From our Farms to your hands",
    },
    {bgImg: imgItem2,
    title: " Welcome To TenTwenty Farms",
    sub_title: "From our Farms to your hands",
    },
    {bgImg: imgItem3,
    title: "Welcome To TenTwenty Farms",
    sub_title: "From our Farms to your hands",
    },
    {bgImg: imgItem4,
      title: "Welcome To TenTwenty Farms ",
      sub_title: "From our Farms to your hands ",
    },
  ]
    return (
      <>
        <Container fluid id="mainCont"> 
        <Header/>
        <Carrousel farmsSlider={farmsSlider}/>
        </Container>
      </>
    )
}

export default App
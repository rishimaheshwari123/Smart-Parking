import React from "react";
import { Carousel } from "react-bootstrap"
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main_home">
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./image/park/1.png"
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="./image/park/2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/park/3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>
      <Link to="/book"><Button className="btn home-parallax">Book Slot</Button></Link>
      <section class="services" id="services">

        <h1 class="heading"> our <span>services</span> </h1>

        <div class="box-container">

          <div class="box">
            <i class="fas fa-car"></i>
            <h3>Cleaning services</h3>
            <p>Places that can make your vehicle clean and shiny.</p>
            <a href="#" class="btn"> read more</a>
          </div>

          <div class="box">
            <i class="fas fa-car-crash"></i>
            <h3>Car Insurance</h3>
            <p>Get an insurance for your as well as your vehicle's safety and make each drive a safe one. </p>
            <a href="#" class="btn"> read more</a>
          </div>

          <div class="box">
            <i class="fas fa-car-battery"></i>
            <h3>Accessories</h3>
            <p>Add accesories to your vehicle to get a better driving experience.</p>
            <a href="#" class="btn"> read more</a>
          </div>
        </div>

      </section>
      


    </div>
  )
}
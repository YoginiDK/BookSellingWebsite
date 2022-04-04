import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../src/assets/2.jpeg";
import logo2 from "../src/assets/4.jpeg";
import logo3 from "../src/assets/3.jpeg"
import logo6 from "../src/assets/6.jpeg";
import logo7 from "../src/assets/7.jpeg";
import logo8 from "../src/assets/8.jpeg"
import logo9 from "../src/assets/9.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card'

function FrictionList() {
    return (
        <div> 
            <Carousel className="home__image" fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
              <img className="d-block w-100" src={logo2} />
        
        </Carousel.Item>
        <Carousel.Item>
              <img className="d-block w-100" src={logo9} />
        
        </Carousel.Item>
        <Carousel.Item>      
            <img className="d-block w-100 " src={logo7} alt=" slide" />
          
        </Carousel.Item>
        <Carousel.Item>      
            <img className="d-block w-100 " src={logo6} alt=" slide" />
          
        </Carousel.Item>
        <Carousel.Item>      
            <img className="d-block w-100 " src={logo8} alt=" slide" />
          
        </Carousel.Item>
        <Carousel.Item>      
            <img className="d-block w-100" src={logo1} alt=" slide" />
          
        </Carousel.Item>
      
        <Carousel.Item>
              <img className="d-block w-100" src={logo3} />
      
        </Carousel.Item>    
   
    </Carousel>

  
   
   
     

    <Carousel className="row ">
      <div className="row ">
      <div className="col-sm-3 hoverEffect">
      <Card style={{ width: '18rem' }}>            
      <Card.Img variant="top" src={logo1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   
    
      </div>
      <div className="col-sm-3 hoverEffect">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-sm-3 hoverEffect">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-sm-3 hoverEffect">
      <Card style={{ width: '18rem' }}>            
      <Card.Img variant="top" src={logo1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   
    
      </div>
      <div className="col-sm-3">
      <Card style={{ width: '18rem',marginTop: '20px' }}>
      <Card.Img variant="top" src={logo2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-sm-3">
      <Card style={{ width: '18rem' ,marginTop: '20px'}}>
      <Card.Img variant="top" src={logo3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
   
  </Carousel>
        </div>
        
    
    );
}

export default FrictionList;
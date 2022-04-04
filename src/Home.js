import React from "react";
import "./Home.css";
import Product from "./Product";
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
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Select from 'react-select'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(props) {
  const [value, setValue] = React.useState(0);

  return (
    
    <div> 
      <div >
      <Navbar bg="light" expand="lg">
        <Container >
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">              
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={props.FrictionList} >Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Non-fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Action and adventure</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Art/architecture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Autobiography</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Biography</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Business/economics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Anthology</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Comics</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/FrictionList">Hindi Novels</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Newly Added Books</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Rare and Collectables</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Graphic Comics</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Children Stories</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Teen Friction</Nav.Link>
              <Nav.Link to="/"></Nav.Link>
              <Nav.Link to="/">Merchandise</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
      {/*<Tabs onSelect={(index, label) => console.log(label + ' selected')}>
     
          <Tab label="Fiction" >
        

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
          </Tab>
          <Tab label="	Non-fiction">Tab 1</Tab>
          <Tab label="Action and adventure" >Tab 2</Tab>
          <Tab label="	Art/architecture"  >Tab 3</Tab>
          <Tab label="Autobiography" >Tab 4</Tab>
          <Tab label="	Biography" >Tab 5</Tab>
          <Tab label="	Business/economics"  >Tab 6</Tab>
          <Tab label="Anthology">Tab 7</Tab>
          <Tab label="Comics">Tab 8</Tab>
      </Tabs>/*}
      

        {/*<div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>*/}
      </div>
    </div>
  );
}

export default Home;

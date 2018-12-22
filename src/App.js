import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

class App extends Component {

  state = {
    populars:[{name:'hi'},{name:'hi'},{name:'hi'},{name:'hi'}]
  }
  componentWillMount() {
    axios.get('https://golden-express.herokuapp.com/browse?aisle=meat')
      .then(res => {
        const popular = res.data;
        this.setState({populars:popular.items});
      })
  }
  render() {
    return (
      <div className="App">
        <div className="Header container">
          <Grid>
            <Row className="show-grid ThisIsTheGrid">
              <Col className="AllGroceries" xs={6} md={6}>
                <span>All Groceries</span>
              </Col>
              <Col xs={6} md={6}>
                <Row className="show-grid">
                  <Col className="ShopByRecipe" xs={12} md={12}>
                    <p>Shop By Recipe</p>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col className="MeatAndChicken" xs={6} md={6}>
                    <p>Meat and Chicken</p>
                  </Col>
                  <Col className="SnacksAndDrinks" xs={6} md={6}>
                    <p>Snacks and Drinks</p>
                  </Col>
                </Row> 
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="PopularGroceries container">
          <Grid>
            <Row className="show-grid">
              <h2>Most Popular Groceries</h2>
              <Col className="PopularGroceryListItem" xs={3} md={3}>
                <img src={this.state.populars[0].imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail"></img>
                <p>{this.state.populars[0].name}</p> 
              </Col>
              <Col className="PopularGroceryListItem" xs={3} md={3}>
                <img src={this.state.populars[1].imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail"></img>
                <p>{this.state.populars[1].name}</p>
              </Col>              
              <Col className="PopularGroceryListItem" xs={3} md={3}>
                <img src={this.state.populars[2].imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail"></img>  
                <p>{this.state.populars[2].name}</p>
              </Col>
              <Col className="PopularGroceryListItem" xs={3} md={3}>
                <img src={this.state.populars[3].imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail"></img>  
                <p>{this.state.populars[3].name}</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Button className="ViewMorePopular">VIEW MORE</Button>
      </div>
    );
  }
}

export default App;

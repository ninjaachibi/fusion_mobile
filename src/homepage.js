import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';

class Homepage extends Component {

  render(){
    return(
      <div className="Header container">
      <Grid>
        <Row className="show-grid ThisIsTheGrid">
          <Col className="AllGroceries" xs={6} md={6}>
            <span>All Groceries</span>
          </Col>
          <Col xs={6} md={6}>
            <Row className="show-grid">
              <Col className="ShopByRecipe" xs={12} md={12}>
                <p className="ShopByRecipeText">Shop By Recipe</p>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="MeatAndChicken" xs={6} md={6}>
                <p className="MeatAndSnackText">Meat and Chicken</p>
              </Col>
              <Col className="SnacksAndDrinks" xs={6} md={6}>
                <p className="MeatAndSnackText">Snacks and Drinks</p>
              </Col>
            </Row> 
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}
export default Homepage
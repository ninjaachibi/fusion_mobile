import React, { Component } from 'react';
import './categories.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

class Categories extends Component{ 
  
  constructor(props){
    super(props); 
    this.categories = ["Beverage","Canned","Dried","Instant","Meat","Noodles","Powder-Mix","Produce","Seafood","Spices","Snack"];
  }

  render(){
    return(
      <div className="categories container">
        <h1>Categories</h1>
        <Grid>
          <Row className="show-grid">
            {this.categories.map((item) =>
              <Col xs={4} md={4}>
                <div class="Card">
                  {item}
                </div>
                
              </Col>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Categories;
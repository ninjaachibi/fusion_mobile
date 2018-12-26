import React, { Component } from 'react';
import './product.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

class Product extends Component{ 
  
  constructor(props){
    super(props); 
  }

  render(){
    return(
      <div className="product container">
        <h2>Product</h2>
        <Grid>
          <Row className="show-grid">
            <Col md={6} xs={6}>
              <img src={this.props.item.imgURI} alt="ReloadImg" className="img-thumbnail"></img>  
            </Col>
            <Col md={6} xs={6}>
              <div className="ProductInfo">
                <h2>{this.props.item.name}</h2>
                <h3>{this.props.item.price}</h3>
                <h4>{this.props.item.description}</h4>
                <Button className="AddToCart">ADD TO CART</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Product;
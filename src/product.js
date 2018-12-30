import React, { Component } from 'react';
import './product.css';
import {Grid,Row,Col,Button,SplitButton,MenuItem} from 'react-bootstrap';

class Product extends Component{ 
  
  constructor(props){
    super(props); 
    this.state = {needsize:false}
  }
  //if(this.props.item.name.slice(this.props.item.name.length-2,this.props.item.name.length) == 'Lb'){
  //  this.setState(state => ({needsize:true}));
  //}
  

  render(){
    return(
      <div className="product container">
        <h2>Product</h2>
        <Grid>
          <Row className="show-grid">
            <Col md={6} xs={6}>
              <img src={this.props.item.imgURI} alt="ReloadImg" className="img-thumbnail img-thumbnail-product"></img>  
            </Col>
            <Col md={6} xs={6}>
              <div className="ProductInfo">
                <h2>{this.props.item.name}</h2>
                <div className="Break"></div>
                <h3>Price: {this.props.item.price}</h3>
                <h4>{this.props.item.description}</h4>
                <div className="Break"></div>
                <div className="Form">
                <SplitButton
                title={'Size'}
                className = "Size"
                >
                <MenuItem eventKey="1">6 oz.</MenuItem>
                <MenuItem eventKey="2">1 Lb.</MenuItem>
                <MenuItem eventKey="3">2 Lb.</MenuItem>
                </SplitButton>
                
                  <label className="QuantityLabel" for="quantity">Quantity: </label>
                  <input size = "3" type="text" name="quantity" className="Quantity"></input>
                  <Button className="AddToCart">ADD TO CART</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Product;
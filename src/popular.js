import React, { Component } from 'react';
import Product from './product.js';
import './App.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

var populars = [{name:''},{name:''},{name:''},{name:''}];
for(var i = 0; i < 100; i++){
  populars.push({name:''})
};

class PopularItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      populars:populars,
      viewmore:4,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      viewmore: this.state.viewmore + 4
    }));
  }
  componentWillMount() {
    axios.get('https://golden-express.herokuapp.com/browse?aisle=meat')
      .then(res => {
        const popular = res.data;
        this.setState({populars:popular.items});
      })
  }

  render(){
    return(
      <div className="PopularGroceries container">
        <Grid>
          <h2>Most Popular Groceries</h2>
          <Row className="show-grid">
          {this.state.populars.slice(0,this.state.viewmore).map((item) => 
              <Col className="PopularGroceryListItem" xs={3} md={3}>
              <img src={item.imgURI} alt="Loading..." className="img-thumbnail img-thumbnail-popular"></img>
              <p className="Price">{item.price}</p>
              <p className="PopularName">{item.name}</p> 
              </Col>
          )}
          </Row>
          <Button onClick={this.handleClick} className="ViewMorePopular">VIEW MORE</Button>
        </Grid>
        <Product item={this.state.populars[0]}/>
      </div>
    )
  }
}
export default PopularItems
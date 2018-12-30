import React, { Component } from 'react';
import Product from './product.js';
import './App.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

var populars = [];

class PopularItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      populars,
      viewmore:4,
      imagesloaded:4,
      loaded:true,
      product:null,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);

    this.loadImages = this.loadImages.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);

  }
  handleButtonClick() {
    this.setState(state => ({
      viewmore: this.state.viewmore + 4,
      loaded:false
    }));
    console.log('button clicked')
  }

  componentDidMount() {
    axios.get('https://golden-express.herokuapp.com/browse?aisle=meat')
      .then(res => {
        var popular = res.data.items;
        popular.map(item =>{
          item["loaded"] = false;
        })

        popular[0]['loaded'] = true;
        popular[1]['loaded'] = true;
        popular[2]['loaded'] = true;
        popular[3]['loaded'] = true;
        this.setState({populars:popular});
      })
  }
  loadImages(item) {
    item.loaded =true
  }

  handleProductClick(product) {
    console.log('product is ', product)
    this.setState({product:product})
  }

  render(){
    console.log(this.state)
    return(
      <div className="PopularGroceries container">
        <Grid>
          <h2>Most Popular Groceries</h2>
          <Row className="show-grid">
          {this.state.populars.slice(0,this.state.viewmore).map((item) => 
              <div onClick={(e) => this.handleProductClick(item)} className={item.loaded ? '':'hidden'}>
                <Col className="PopularGroceryListItem" xs={3} md={3}>
                <img onLoad={this.loadImages(item)}  src={item.imgURI} alt="Loading..." className="img-thumbnail img-thumbnail-popular"></img>
                <p className="Price">{item.price}</p>
                <p className="PopularName">{item.name}</p> 
                </Col>
              </div>
          )}
          
          </Row>
          <Button onClick={this.handleButtonClick} className="ViewMorePopular">VIEW MORE</Button>
        </Grid>
        <Product item={this.state.product}/>
      </div>
    )
  }
}
export default PopularItems
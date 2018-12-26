import React, { Component } from 'react';
import Categories from './categories.js';
import Product from './product.js';
import './App.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

var populars = [{name:'hi'},{name:'hi'},{name:'hi'},{name:'hi'}];
for(var i = 0; i < 100; i++){
  populars.push({name:'hi'})
};

class PopularItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Most Popular Groceries</h2>
        <Row className="show-grid">
        {this.props.populars.slice(0,this.props.iterateamount).map((item) => 
          
            <Col className="PopularGroceryListItem" xs={3} md={3}>
            <img src={item.imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail img-thumbnail-popular"></img>
            <p>{item.name}</p> 
            </Col>
          
        )}
        </Row>
      </div>
    )
  }
}

class App extends Component {

constructor(props){
  super(props);
  this.state = {    
    populars:populars,
    viewmore:4,
  };

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
            <PopularItem populars={this.state.populars} iterateamount = {this.state.viewmore}/>
          </Grid>
        </div>
        <Button onClick={this.handleClick} className="ViewMorePopular">VIEW MORE</Button>
        <Categories></Categories>
        <Product item={this.state.populars[0]}/>
      </div>
    );
  }
}

export default App;

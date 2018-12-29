import React, { Component } from 'react';
import './categories.css';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

var category = [{name:''},{name:''},{name:''},{name:''}];
for(var i = 0; i < 100; i++){
  category.push({name:''})
};


{/* 
class CategoryItems extends Component{
  constructor(props){
    super(props);
    this.categories = [
      {name:"Beverage", img:"https://www.99ranch.com/img/CMSImages/3660049F800x800.png"},{name:"Canned", img:"https://www.99ranch.com/ul/products/1482/1653475-1_13%20(1).jpg"},{name:"Dried", img:"https://www.99ranch.com/ul/products/1262/1636337-1_13%20(1).jpg"},{name:"Instant", img:"https://www.99ranch.com/img/CMSImages/1608664.jpg"},{name:"Meat", img:"https://www.99ranch.com/img/CMSImages/1515176.jpg"},{name:"Noodles", img:"https://www.99ranch.com/ul/products/970/1800x800.png"},{name:"Powder-Mix", img:"https://www.99ranch.com/ul/products/1037/1607313-1_13.jpg"},{name:"Produce", img:"https://www.99ranch.com/img/CMSImages/1392440.jpg"},{name:"Seafood", img:"https://www.99ranch.com/img/CMSImages/1341715.jpg"},{name:"Spices", img:"https://www.99ranch.com/ul/products/1627/2605540-1_13.jpg"},{name:"Snacks", img:"https://www.99ranch.com/ul/products/1337/1643116-1_13800x800.png "}];
    this.state = {
      category: this.props.category,
      categoryname: this.props.categoryname,
    }
  }
  render(){
    return(
      <Row className="show-grid">
      <h3>{this.state.categoryname}</h3>>
      {this.state.category.slice(0,this.state.category.length).map((item) => 
          <Col className="PopularGroceryListItem" xs={3} md={3}>
          <img src={item.imgURI} alt="https://via.placeholder.com/150" className="img-thumbnail img-thumbnail-popular"></img>
          <p className="Price">{item.price}</p>
          <p className="PopularName">{item.name}</p> 
          </Col>
        
      )}
      </Row>
    )
  }


}
*/}

class Categories extends Component{ 
  
  
  constructor(props){
    super(props); 
    this.categories = [
      {name:"Beverage", img:"https://www.99ranch.com/img/CMSImages/3660049F800x800.png"},{name:"Canned", img:"https://www.99ranch.com/ul/products/1482/1653475-1_13%20(1).jpg"},{name:"Dried", img:"https://www.99ranch.com/ul/products/1262/1636337-1_13%20(1).jpg"},{name:"Instant", img:"https://www.99ranch.com/img/CMSImages/1608664.jpg"},{name:"Meat", img:"https://www.99ranch.com/img/CMSImages/1515176.jpg"},{name:"Noodles", img:"https://www.99ranch.com/ul/products/970/1800x800.png"},{name:"Powder-Mix", img:"https://www.99ranch.com/ul/products/1037/1607313-1_13.jpg"},{name:"Produce", img:"https://www.99ranch.com/img/CMSImages/1392440.jpg"},{name:"Seafood", img:"https://www.99ranch.com/img/CMSImages/1341715.jpg"},{name:"Spices", img:"https://www.99ranch.com/ul/products/1627/2605540-1_13.jpg"},{name:"Snacks", img:"https://www.99ranch.com/ul/products/1337/1643116-1_13800x800.png "}];
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.state = {
      category: category,
      categoryname: "",
    }
  }
  handleCategoryClick(props){
    axios.get('https://golden-express.herokuapp.com/browse?aisle=' + props.toLowerCase())
      .then(res => {
        const category = res.data;
        this.setState({category:category.items,categoryname:props});
      })
  }

  render(){
    return(
      <div className="categories container">
        <h2>Categories</h2>
        <Grid>
          <Row className="show-grid">
            {this.categories.map((item) =>
              <Col xs={4} md={4}>
                <div class="Card">
                  <img src={item.img} className="img-thumbnail img-height"></img>
                  
                </div>
                <h3 className="text-block" onClick={() => this.handleCategoryClick(item.name)}>{item.name}</h3>
                
              </Col>
            )}
          </Row>
          {/*<CategoryItems category={this.state.category} categoryname={this.state.categoryname}/>*/}
          <Row className="show-grid">
          <h3>{this.state.categoryname}</h3>>
          {this.state.category.slice(0,this.state.category.length).map((item) => 
              <Col className="PopularGroceryListItem" xs={3} md={3}>
              <img src={item.imgURI} alt="Loading Photo..." className="img-thumbnail img-thumbnail-popular"></img>
              <p className="Price">{item.price}</p>
              <p className="PopularName">{item.name}</p> 
              </Col>
            
          )}
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Categories;

import React from "react";


import {

  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";
const _ = require('lodash')




class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        keyword : ""
    }
    this.searchNews = this.searchNews.bind(this)
    
  }
  searchNews(e){

     this.setState({keyword: e.target.value});
     let deb = _.debounce(this.props.searchNews, 1000)
     deb(this.state.keyword);

  }

  render() {
    return (



        <Col md="12">
              <InputGroup className="no-border">
                <Input placeholder="Search..." onChange={this.searchNews} value={this.state.keyword} />
                <InputGroupAddon addonType="append">
                  <InputGroupText >
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
      
            </Col>


           
            
 


    );
  }
}

export default Search;

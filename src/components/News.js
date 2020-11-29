
import React from "react";


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

import Search from './Search';

import {  Redirect } from 'react-router'



class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'redirect': false
    }
    this.goToNews = this.goToNews.bind(this)
    this.searchNews = this.searchNews.bind(this)
    
  }
  searchNews(keyword){
    this.props.searchHeadlines(keyword)
  }
  goToNews(news){
    localStorage.setItem('newsdetail', JSON.stringify(news))
    this.setState({redirect:true})
  }
  componentDidMount(){
    localStorage.removeItem('newsdetail')
    this.props.getHeadLines();
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            {this.state.redirect ? <Redirect to="/admin/newsDetail"/> : ""}
            <Search searchNews={this.searchNews}/>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Latest News</CardTitle>
                  <p className="card-category">
                    Please use the search bar to find news with keywords
                  </p>
                </CardHeader>
                <CardBody>
                <Table responsive>
              
                    {this.props.newsData ? 
                    <tbody>
                    {this.props.newsData.map(news =>
                      <Card onClick={()=>this.goToNews(news)}><CardHeader><CardTitle>{news.title}</CardTitle></CardHeader><CardBody>{news.description}</CardBody></Card>
                    )}
                    </tbody>
                    : ""}
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default News;

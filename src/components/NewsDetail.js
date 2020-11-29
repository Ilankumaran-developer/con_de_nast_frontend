
import React from "react";


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";



class NewsDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        newsData : {}
    }

    
  }
 
  componentDidMount(){
      //console.log(JSON.parse(localStorage.getItem('newsdetail')))
    this.setState({newsData:JSON.parse(localStorage.getItem('newsdetail'))})
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h2">{this.state.newsData.title}</CardTitle>
                 
                </CardHeader>
                <CardBody>
                    <h4>{this.state.newsData.description}</h4>
                    <img  alt="noimage" src={this.state.newsData.urlToImage}/>
                    <Col md="12">
                    <p>
                        {this.state.newsData.content}
                    </p>
                    </Col>
                    
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NewsDetail;

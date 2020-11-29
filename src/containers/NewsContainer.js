import { connect } from 'react-redux';
import {getHeadLines, routeToNewsDetail, searchHeadlines} from './../actions';
import News from './../components/News';


const mapStateToProps = (state, props) => {
  return {
    props,
    newsData: state.news.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHeadLines: () => dispatch(getHeadLines()),
    routeToNewsDetail : (newsDetail) => dispatch(routeToNewsDetail(newsDetail)),
    searchHeadlines : (keyword) => dispatch(searchHeadlines(keyword))
  }
}

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)

export default NewsContainer

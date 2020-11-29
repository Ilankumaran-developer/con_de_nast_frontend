import { connect } from 'react-redux';

import NewsDetail from './../components/NewsDetail';


const mapStateToProps = (state) => {
    console.log(state)
  return {
    newsData: state.news.newsDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const NewsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail)

export default NewsDetailContainer

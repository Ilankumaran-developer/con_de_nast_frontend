
import ACTIONS from './ActionTypes';

import NewsClient from './news-client';
const news = new NewsClient();


const fetchNewsSuccess = (news) => {
    return {
      type: ACTIONS.NEWS.FETCH_NEWS.name,
      news
    }
  }


  const routeToNewsDetailSuccess = (newsDetail) =>{
    return {

      type: ACTIONS.NEWS.NEWSDETAIL.name,
      newsDetail
    }
  }

export function routeToNewsDetail(newsDetail){
    return (dispatch) =>{
      console.log(newsDetail)
      dispatch(routeToNewsDetailSuccess(newsDetail))
    }
  }
  

export function getHeadLines() {

    return (dispatch) => {
      news.getHeadLines()
      .then((response) => {
        console.log(response)
        dispatch(fetchNewsSuccess(response));        
      })
      .catch((e) => {
        console.log(e)
        dispatch(fetchNewsSuccess([]))
      })
    };
  }



  export function searchHeadlines(keyword) {

    return (dispatch) => {
      news.searchHeadlines(keyword)
      .then((response) => {
        console.log(response)
        dispatch(fetchNewsSuccess(response));        
      })
      .catch((e) => {
        console.log(e)
        dispatch(fetchNewsSuccess([]))
      })
    };
  }
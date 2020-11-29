import ACTIONS from '../actions/ActionTypes';



const news = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.NEWS.FETCH_NEWS.name:
      return Object.assign({}, state, {
        news: action.news.articles
      });
    case ACTIONS.NEWS.NEWSDETAIL.name:
      return Object.assign({}, state, {
        newsDetail: action.newsDetail
      });

    default:
      return state;
  }
}

export default news;

import Base from './base';



class NewsClient extends Base {
    constructor() {
        super();
        this.newsBase = 'http://localhost:8000'
    }
    getHeadLines() {

        let url = `${this.newsBase}/getHeadLines`;
        let options = {
            url
        };

        return this._get(options);

    }
    searchHeadlines(keyword){
        let url = `${this.newsBase}/searchHeadLines?q=${keyword}`;
        let options = {
            url
        };

        return this._get(options);
    }
}


export default NewsClient



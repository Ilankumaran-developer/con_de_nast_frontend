import http from 'axios';
const _ = require('lodash');

class Base{

_get(options) {
    let me = this;
    let o = _.extend({}, {}, options);
    console.log(o)
    return new Promise(function(resolve, reject) {
      http({
        url: o.url,
        method: 'get',
        headers: {},
        params: o.params,
        responseType: 'json'
      })
      .then(json => {
        resolve(json.data);
      })
      .catch(response => {
        console.log(response)
          reject(response);
      })
    })
  }

_post(options) {
    let me = this;
    let o = _.extend({}, me.baseOptions, options)
    return new Promise(function(resolve, reject) {
      http({
        url: o.url,
        method: 'post',
        headers: {},
        params: o.params,
        data: o.data,
        responseType: o.responseType || 'json'
      })
      .then(json => {
        resolve(json.data);
      })
      .catch(response => {
        if(!me.handleErrorResponse(response))
        {
          reject(response);
        }
      })
    })
  }

_put(options) {
    let me = this;
    let o = _.extend({}, me.baseOptions, options)
    return new Promise(function(resolve, reject) {
      http({
        url: o.url,
        method: 'put',
        headers:{},
        params: o.params,
        data: o.data,
        responseType: 'json'
      })
      .then(json => {
        resolve(json.data);
      })
      .catch(response => {
        if(!me.handleErrorResponse(response))
        {
          reject(response);
        }
      })
    })
  }

}

export default Base;
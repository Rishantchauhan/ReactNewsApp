import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,date,Imageurl,url}=this.props;
    return (
        <div className="card mx-2 my-3" style={{width: "18rem"}}>
        <img className="card-img-top" src={Imageurl} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <strong >{new Date(date).toGMTString()}</strong>
          <center><a href={url} className="btn btn-light" target='_blank'>Read News</a></center>
        </div>
      </div>
    )
  }
}

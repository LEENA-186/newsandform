import React,{Component} from 'react'

class News extends Component{

 
  render(){
    let {title,description,imageUrl,url}=this.props;
    return(
      <div className="my-3">
       <div className="card" style={{width: " 20rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank" rel="noreferrer"className="btn btn-primary">Read More</a>
      </div>
      </div>
      </div>
      
    )
  }
}
export default News
import React, {Component} from 'react'
import './Card.css'

// class Card extends Component{
   
//     render(){
//         const post = this.props.post
//         return  <div  className="row"> 
//                <div className="mainDiv col-lg-4">
//                     <img  className="mainDivImg rounded-circle" src={post.imageSource}/>                                
//                     <h2>{post.heading}</h2>
//                     <p>{post.p}</p>
//                     <p><a className="btn btn-secondary" role="button" href="#">View details »</a></p>
//                 </div>
//             </div>                 
        
//     }
    
// }


function Card (props){
    const post = props.post
        return  <div className="mainDiv col-lg-4">
                    <img  className="mainDivImg rounded-circle" src={post.imageSource}/>                                
                    <h2>{post.heading}</h2>
                    <p>{post.p}</p>
                    <p><a className="btn btn-secondary" role="button" href="#" onClick ={()=>(props.removePost(post))} >Remove Post</a></p>
                </div>
                        
        
}
export default Card
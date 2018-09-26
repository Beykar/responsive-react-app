import React, {Component} from 'react'
import Card from './Card'
import AddPost from'./AddPost' 


function CardWall(props){
    return <div>
         <div className="row">
            <AddPost />
            {props.posts
                .sort((x,y)=>{
                 return y.id -x.id
                })
                .map((post, index)=> <Card key={post.id} post = {post} removePost = {props.onRemovePost} />)}
         </div>
    </div>
}

export default CardWall   
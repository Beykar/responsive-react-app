import React, {Component} from 'react'
import Card from './Card'
import AddPost from'./AddPost' 


function CardWall(props){
    return <div>
         <div className="row">
            <AddPost />
            {props.posts.map((post, index)=> <Card key={index} post = {post} removePost = {props.onRemovePost} />)}
         </div>
    </div>
}

export default CardWall   
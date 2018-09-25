import React, {Component} from 'react'
import Card from './Card'


function CardWall(props){
    return <div>
         <div className="row">
            {props.posts.map((post, index)=> <Card key={index} post = {post} removePost = {props.onRemovePost} />)}
         </div>
    </div>
}

export default CardWall   
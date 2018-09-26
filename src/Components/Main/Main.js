import React, {Component} from 'react'
import './Main.css'
import CardWall from './CardWall'
import {Route} from 'react-router-dom'
//import AddPostPage from './AddPostPage'
import {removePost} from '../../redux/actions'

     
class Main extends Component{
    constructor(){
          super()
    }    

    componentDidMount(){
        this.props.dispatch(removePost(1))
    }

    render(){     
             console.log(this.props)   
             return (
             <div>
                 <Route exact path="/" render = {()=>(
                        <div className="mainContainer container-fluid">
                            <CardWall posts={this.props.posts}  />
                        </div>  
                 )}/>
                 {/* onRemovePost = {this.removePost} */}
                 {/* <Route path ="/AddPostPage" render ={({history})=>(          
                    <AddPostPage onAddPost={(addedPost)=>{
                        this.addPost(addedPost)
                        history.push('/')
                    }}/>
                 )}/>                              */}
              </div>
             )
    }

}

export default Main 
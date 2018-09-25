import React, {Component} from 'react'
import './Main.css'
import CardWall from './CardWall'
import {Route} from 'react-router-dom'
import AddPostPage from './AddPostPage'

     
class Main extends Component{
    constructor(){
          super()
          this.state = {
            posts: [
                { 
                    imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                    heading:'Heading',
                    p:'1. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
             },
             { 
                 imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                 heading:'Heading',
                 p:'2. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
             },
             { 
                 imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                 heading:'Heading',
                 p:'3. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
             },  { 
                imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                heading:'Heading',
                p:'4. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
            },
            { 
                imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                heading:'Heading',
                p:'5. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
            },
            { 
                imageSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                heading:'Heading',
                p:'6. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' 
            }
             ]
          }  
        this.removePost = this.removePost.bind(this)
    }    
    
    navigate(){
    }


    removePost(postRemoved){
            console.log(postRemoved.p)
            this.setState((state) => ({
                   posts: state.posts.filter(post => post !== postRemoved) 
                }))
                //console.log(posts)
            }            
        
    render(){        
             return (
             <div>
                 <Route exact path="/" render = {()=>(
                        <div className="mainContainer container-fluid">
                            <CardWall posts={this.state.posts} onRemovePost = {this.removePost} />
                        </div>  
                 )}/>
                 <Route path ="/AddPostPage" render ={()=>(
                  <div>              
                    <AddPostPage/>
                    </div>
                 )}/>            
              </div>
             )
    }

}

export default Main 
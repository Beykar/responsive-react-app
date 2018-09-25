import React, {Component} from 'react'
import {Button} from 'reactstrap'
import './AddPost.css'
import {Link} from 'react-router-dom'

class AddPost extends Component{

    render(){

        return <div className="container-fluid">
                <div className="row">
                        <div className="btnDiv col-4">
                            <Button color="primary"><Link  to="/AddPostPage">Add Post</Link></Button>  
                        </div>
                </div>
        </div>
    }



}

export default AddPost
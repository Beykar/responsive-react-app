import React, {Component} from 'react'
import FormPage from './FormPage'
import './AddPostPage.css'


class AddPostPage extends Component {
 
    render(){
        return <div>

            <div className="mainContainer container-fluid">
                      <h1>Add Post</h1>
                      <FormPage onAddPost={this.props.onAddPost}/>
             </div>

        </div>

    }


}

export default AddPostPage
import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import {Route} from 'react-router-dom'
import './FormPage.css'


class FormPage extends Component{
     constructor(){
         super()
        this.handleSubmit = this.handleSubmit.bind(this)
     }   
        
     
     handleSubmit(event){
            event.preventDefault();
                const imageSource =  event.target.elements.imageSource.value
                const heading = event.target.elements.heading.value 
                const p = event.target.elements.p.value       
                const post = {
                    id: Number(new Date()),
                    imageSource: imageSource,
                    heading: heading,
                    p: p
                }

                      
                if (imageSource && heading && p){
                        this.props.onAddPost(post)
                        console.log(post)
                }
        }
    

    render (){
        return (
            <div>
                <Form className="col-12" onSubmit={this.handleSubmit} >
                   <FormGroup className="col-12">                     
                        <Label className="" for="imageSource">Image Source</Label>
                        <input type="FormText" name="imageSource" placeholder="Enter image link here... "></input>
                    </FormGroup>
                    <FormGroup className="col-12"> 
                        <Label className="" for="heading">Heading</Label>
                        <input type="FormText" name="heading" placeholder="Enter heading here... "></input>
                    </FormGroup>
                    <FormGroup className="col-12"> 
                        <Label className="" for="p">Description</Label>
                        <input type="FormText" name="p" placeholder="Enter description here... "></input>
                    </FormGroup>
                    <Button className="submitBtn" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default FormPage
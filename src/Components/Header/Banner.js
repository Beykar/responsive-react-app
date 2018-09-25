import React, {Component} from 'react'
import Image from '../../assets/images/reactjs-2.jpg'

class Banner extends Component{
        render(){
            return(
                <img className="col-12 bannerImage" src={Image} /> 
            )
        }


}

export default Banner
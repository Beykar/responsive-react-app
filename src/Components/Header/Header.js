import React, {Component} from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'
import Banner from './Banner'

class Header extends Component {
    render(){
       return( 
        <header>
            <div className="headerContainer container-fluid">
                <div className="row">
                    <Nav/>
                    <Banner/>
                </div>
            </div>
        </header>
       )
    }
}

export default Header

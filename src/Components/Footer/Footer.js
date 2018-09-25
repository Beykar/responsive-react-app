import React, {Component} from 'react'
import './Footer.css'


class Footer extends Component{
        render(){

                return(
                    <div className="footerDiv container-fluid fixed-bottom">
                        <div className="row">
                             <div className="col-6">Copyright &copy;2018</div>
                             <div className="col-6">beykarwebs</div>                             
                        </div>
                    </div>

                )

        }


}

export default Footer
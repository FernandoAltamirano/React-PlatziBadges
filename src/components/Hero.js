import React from 'react'

import './styles/Badge.css'
import logo from '../images/badge-header.svg'
class Hero extends React.Component{
    render(){
        return(
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges__conf-logo" src={logo} alt="" />
                    </div>
                </div>
            </div>
        )
    }

}

export default Hero
import React from 'react'

import PageError from '../components/PageError'
import './styles/NotFound.css'

function NotFound(props){
    return (
        <React.Fragment>
            <PageError imageUrl="https://static.platzi.com/static/images/error/img404.png" message="No encontramos lo que buscabas."/>
        </React.Fragment>
    )
}

export default NotFound
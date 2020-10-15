import React from 'react'

import '../pages/styles/NotFound.css'

function PageError(props){
    return (
        <div className="NotFound">
            <div className="NotFound__image">
            <img  src={props.imageUrl} width="300" height="300" alt="" />
            <div className="NotFound__description">
                <h2 >Hmmm!</h2>
                <p>{props.message}</p>
            </div>
            </div>
        </div>
    )
}

export default PageError
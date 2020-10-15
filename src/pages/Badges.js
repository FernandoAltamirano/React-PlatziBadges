import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import './styles/Badges.css'
import imageUrl from '../images/pageErrorAst.svg'
import api from '../api'

class Badges extends React.Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try{
            const data = await api.badges.list()
            this.setState({
                loading: false,
                data: data
            })
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }

    }
    // constructor(props){
    //     super(props)
    //     console.log('1')
    //     this.state = {
    //         data:[]
    //     }
    // }
    // componentDidMount(){
    //     console.log('3')
    //     this.timeOutId = setTimeout( () => {
    //         this.setState({
    //             data : []
    //         })
    //     },2000)
    // }//monta
    // componentDidUpdate(prevProps, prevState){
    //     console.log('5')
    //     console.log({
    //         prevProps: prevProps,
    //         prevState : prevState
    //     })
    //     console.log({
    //         props: this.props,
    //         state : this.state
    //     })
    // }//actualiza
    // componentWillUnmount(){
    //     console.log('desmonta')
    //     clearTimeout(this.timeOutId)
    // }//desmonta
    render(){
        if(this.state.loading === true && this.state.data == undefined){
            return <PageLoading />
        }
        
        if(this.state.error){
            return <PageError imageUrl={imageUrl} message="Server Error..."/>
        }

        // console.log('2')
        return(
            <React.Fragment>
                <Hero />
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <div className="Badges_list">
                        <BadgesList Badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges
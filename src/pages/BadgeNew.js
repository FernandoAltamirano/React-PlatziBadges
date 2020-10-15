import React from 'react'


import './styles/BadgeNew.css'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Hero from '../components/Hero'
import PageLoading from '../components/PageLoading'

import api from '../api'

class BadgeNew extends React.Component{
    state ={ 
        loading: false,
        error: null,
        form :{
        firstName: '',
        lastName:'',
        email:'',
        twitter:'',
        jobTitle:'',
        avatarUrl:''
    }}
    handleChange = ev => {
        this.setState({
            form:{
                 ...this.state.form,
                [ev.target.name]: ev.target.value
                }
        })
    }

    handleSubmit = async ev => {
        ev.preventDefault()
        this.setState({
            loading: true,
            error: null
        })
        try{
            await api.badges.create(this.state.form)
            this.setState({
                loading: false
            })
            this.props.history.push('/badges')
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    render(){
        if(this.state.loading === true){
            return(
                <PageLoading />
            )
        }

        return(
            <React.Fragment>
                <Hero />
                {/* content */}
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} ocupation={this.state.form.jobTitle} email={this.state.form.email} twitter={this.state.form.twitter}/>
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error}/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeNew
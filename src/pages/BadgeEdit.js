import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Hero from '../components/Hero'
import PageLoading from '../components/PageLoading'

import api from '../api'

class BadgeEdit extends React.Component{
    state ={ 
        loading: true,
        error: null,
        form :{
        firstName: '',
        lastName:'',
        email:'',
        twitter:'',
        jobTitle:'',
        avatarUrl:''
    }}

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({
                loading: false,
                form: data
            })
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error}/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeEdit
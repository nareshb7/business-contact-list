import React from 'react'
import { Component } from 'react'
import {Link } from 'react-router-dom'

class AddContact extends Component {
    
    state ={
        name: '',
        mail: ''
    };
    addContact =(e)=> {
        e.preventDefault()
        if (this.state.name==='' || this.state.mail ==="") {
            alert(`all fields are required`)
            return ` All fileds are required`
        }
        this.props.addContactHandler(this.state)
        this.setState({name: '', mail: ''})
        console.log(this.props)
        
    }
    render () {
        return (
            <div>
                <form onSubmit={this.addContact}>
                    <div>
                        <label> Name :</label>
                        <input type='text' 
                        name='name' 
                        placeholder='Name'
                        value ={this.state.name}
                        onChange ={(e)=> this.setState({ name: e.target.value})} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" 
                        name="mail" 
                        placeholder='Mail'
                        value ={ this.state.mail}
                        onChange ={(e)=> this.setState({ mail: e.target.value})}
                         />
                    </div>
                    <div>
                        <button> Add </button>
                    </div>
                    <Link to='/'><button>Back to ContactList</button></Link>
                    
                </form>
            </div>
          )
    }
    
  
}

export default AddContact
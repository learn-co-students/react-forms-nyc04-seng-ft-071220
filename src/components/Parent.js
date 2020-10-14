import React from 'react'
import Form from './Form'
import DisplayInfo from './DisplayInfo'

class Parent extends React.Component{

    state={
        firstName:" ",
        lastName:" "
    }

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    render(){
        return(
            <div>
                <Form data={this.state} handleChange={this.handleChange}/>
                <DisplayInfo datat={this.state}/>
            </div>
        )
    }
}

export default Parent

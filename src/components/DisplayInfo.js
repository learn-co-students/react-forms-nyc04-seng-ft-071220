import React from 'react'

class DisplayInfo extends React.Component{
    render(){
        let {firstName,lastName}=this.props.data
        return(
            <div>
              <h1>First Name: {firstName}</h1>
              <h1>Last Name: {lastName}</h1>
            </div>
        )
    }
}

export default DisplayInfo
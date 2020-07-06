import React from 'react'

class PureComponent extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            kalimatHello : 'Hello Sayang'
        }
    }
    componentDidMount(){
        console.log('Hello Sayang')
    }
    render(){
        return(
            <React.Fragment>
                <h3>Hello Sayang Purecomponent</h3>
            </React.Fragment>
        )
    }
}

export default PureComponent
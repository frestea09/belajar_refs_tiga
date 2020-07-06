import React from 'react'
class Stateful extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler(){
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default Stateful
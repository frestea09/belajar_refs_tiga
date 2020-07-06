import React from 'react'
import StateLess from './Stateless'
import Stateful from './Stateful'
class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countPengunjung : 0,
            namePengunjung : '',
        }
        this.setNamePengunjung = this.setNamePengunjung.bind(this)
        this.sayName = this.sayName.bind(this)
    }
    setNamePengunjung(inputName){
       this.setState(
           {
            namePengunjung : inputName.target.value
           }
       )
    }
    sayName(){
        alert(this.state.namePengunjung)
    }
    render(){
        return(
            <div className='Content'>
                <h3>Ini Content</h3>
                <StateLess setNamePengunjung = {this.setNamePengunjung} sayName = {this.sayName}/>
                <Stateful/>
            </div>
        )
    }
}
export default Content
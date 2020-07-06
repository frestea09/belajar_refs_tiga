import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      namePengguna : 'ilman teguh prasetya',
    }
  }
  render(){
    return(
      <div className='App'>
        <Header namePengguna ={this.state.namePengguna}/>
        <Content/>
      </div>
    )
  }
} 

export default App
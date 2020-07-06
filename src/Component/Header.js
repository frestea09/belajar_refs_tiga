import React from 'react'
import PureComponent from './PureComponent'
import MemmoFragment from './MemoFragment'
function Header(){
    return(
      <div>
          <PureComponent/>
          <MemmoFragment/>
      </div>     
    )
}

export default React.memo(Header)
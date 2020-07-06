import React from 'react'

function MemoFragment(){
    return(
        <React.Fragment>
            <h3>Hello From Fragment</h3>
        </React.Fragment>
    )
}

export default React.memo(MemoFragment)
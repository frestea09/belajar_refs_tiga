import React from 'react'

function StateLess(props){
    return(
        <div>
            <form>
                <label>Name : </label>
                <input id='nameMahasiswa' name='nameMahasiswa' type='text' onChange = {props.setNamePengunjung}/>
                <button onClick={props.sayName}>Save</button>
            </form>
        </div>
    )
}
export default StateLess
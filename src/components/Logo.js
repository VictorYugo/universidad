import React from 'react'
import logoUNT from '../img/UNT_logo.png'

class Logo extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <img alt='' width='15%' src={logoUNT}/>
                </div>
                <div>
                    <p>Universidad Nacional de Trujillo</p>
                    <h1><b>UNT</b></h1>
                </div>
            </div>
        )
    }
}

export default Logo;
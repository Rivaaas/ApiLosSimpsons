import React from 'react'

import imgboton from '../../IMG/lossimp.png'

const Boton = ({consultarApi}) => {
    return (
        <>
           <img src={imgboton} className='imgboton' onClick={consultarApi} alt=""/>
        </>
    )
}

export default Boton

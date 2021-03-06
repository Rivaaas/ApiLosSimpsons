import React from 'react'


const Personaje = ({ personaje }) => {


    return (
        <>
            <div className='container contcss'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='cuadro'>
                        <h2>{personaje.quote}</h2>
                        <div className='personajecss'>

                            <h3>{personaje.character}</h3>
                        </div>
                    </div>
                    <img src={personaje.image} alt="" className='img-fluid w-25' />
                </div>
            </div>
        </>
    )
}
Personaje.defaultProps = {

    personaje: {
        quote: "",
        character: "",
        image: "",
        characterDirection: ""
    }
}
export default Personaje

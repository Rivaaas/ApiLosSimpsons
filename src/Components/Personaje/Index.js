import React from 'react'


const Personaje = ({ personaje }) => {
console.log(personaje)


    return (
        <>
            <div>
                <h4>{personaje.quote}</h4>
                <p>{personaje.character}</p>
                <img src={personaje.image} />
            </div>

        </>
    )
}

export default Personaje

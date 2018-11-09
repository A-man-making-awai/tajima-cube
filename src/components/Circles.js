import React from 'react'

const Circles = () => (
    <div className="circles">
        {[...Array(5)].map((_, i) => <div key={i} className={`circle circle_0${i+1}`} />)}
    </div>
)

export default Circles
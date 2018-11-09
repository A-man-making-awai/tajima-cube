import React from 'react'

const Shapes = () => (
    <div className="shapes">
        {[...Array(6)].map((_, i) => <div key={i} className={`shape_0${i+1}`} />)}
    </div>
)

export default Shapes
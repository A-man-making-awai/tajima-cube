import React from 'react'
import CubeTh from './Cube/Th'
import CubeSi from './Cube/Si'
import CubeE from './Cube/E'
import CubeD from './Cube/D'
import CubeG from './Cube/G'
import CubeN from './Cube/N'

const Cubes = () => (
    <div className="cubes">
        <CubeD />
        <CubeE />
        <CubeSi />
        <CubeG />
        <CubeN />
        <CubeTh />
    </div>
)

export default Cubes
import React from 'react'

const CubeG = () => (
    <div className="cubeG">
        <div className="cube_g">
            <span className="frame">
                <span className="face_01" />
                <span className="face_02" />
                <span className="face_03" />
                <span className="face_04" />
                <span className="face_05" />
                <span className="face_06" />
                <span className="face_07" />
                <span className="face_08" />
                <span className="face_09" />
            </span>
        </div>
        <div className="cube_g copy">
            <span className="frame">
                <span className="face_01" />
                <span className="face_02" />
                <span className="face_03" />
                <span className="face_04" />
                <span className="face_05" />
                <span className="face_06" />
            </span>
        </div>
        <div className="cube_g side">
            <span className="frame">
                <span className="face_01 first" />
                <span className="face_02 first" />
                <span className="face_03 first" />
                <span className="face_04 first" />
                <span className="face_05 first" />
                <span className="face_06 first" />
                <span className="face_01 second" />
                <span className="face_02 second" />
                <span className="face_03 second" />
                <span className="face_04 second" />
                <span className="face_05 second" />
                <span className="face_06 second" />
            </span>
            <span className="face_01 square" />
            <span className="face_05 square" />
        </div>
    </div>
)

export default CubeG
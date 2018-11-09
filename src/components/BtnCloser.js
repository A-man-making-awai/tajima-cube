import React from 'react'
import PropTypes from 'prop-types'

const BtnCloser = ({ clicked, onClick }) => {
    const classNames = ['btncloser'];
    if (clicked) classNames.push('off');

    return (
        <div
            className={classNames.join(' ')}
            onClick={onClick}
        >
            <span>C</span>
            <span>L</span>
            <span>I</span>
            <span>C</span>
            <span>K</span>
        </div>
    )
}

BtnCloser.propTypes = {
    clicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default BtnCloser
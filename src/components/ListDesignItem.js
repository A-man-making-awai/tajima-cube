
import React from 'react'
import PropTypes from 'prop-types'

const ListDesignItem = ({moji, onEnter, onLeave}) => (
    <li
        className={moji}
        onMouseEnter={() => onEnter(moji)}
        onMouseLeave={onLeave}
    >
        <div>{moji.toUpperCase()}</div>
    </li>
)

ListDesignItem.propTypes = {
    moji: PropTypes.string.isRequired,
    onEnter: PropTypes.func.isRequired,
    onLeave: PropTypes.func.isRequired
}

export default ListDesignItem
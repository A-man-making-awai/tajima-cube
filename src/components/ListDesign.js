import React from 'react'
import PropTypes from 'prop-types'
import ListDesignItem from '../containers/ListDesignItem'

const ListDesign = ({clicked}) => {
    const classNames = ['list_design', 'split_5'];
    if (clicked) classNames.push('on');

    return (
        <ul className={classNames.join(' ')}>
            <ListDesignItem moji="d" />
            <ListDesignItem moji="e" />
            <ListDesignItem moji="si" />
            <ListDesignItem moji="g" />
            <ListDesignItem moji="n" />
        </ul>
    )
}

ListDesign.propTypes = {
    clicked: PropTypes.bool.isRequired
}

export default ListDesign
import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInput = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === '') {
            return
        }
        setcategories(categories => [inputValue, ...categories])
    }
    return (

        <>
            <form onSubmit={handleSubmit}>

                <h1>Add cate</h1>

                <input type="text" value={inputValue} onChange={handleInput} />
            </form>
        </>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired,
    // saludo: PropTypes.number.isRequired,
}
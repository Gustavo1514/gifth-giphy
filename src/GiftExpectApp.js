import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpectApp = () => {


    const [categories, setcategories] = useState(['Kardashian'])


    // const handleAdd = () => {
    //     // categories.push('Henry')
    //     // console.log(categories);
    //     // variante 1
    //     // setcategories(categories.concat('Henry'))
    //     // variante 2
    //     // setcategories([...categories, 'Futbol'])
    //     // setcategories(['Futbol', ...categories])
    //     // variante3
    //     setcategories((categories)=>['Futbol', ...categories])
    // }
    return (
        <>
            <h1>Gift Expect</h1>

            <AddCategory setcategories={setcategories} />
            <hr />

            {/* <button >Agregar</button> */}

            <ul>
                {categories.map((category) => (
                    // <li key={category}>{`${category}`}</li>
                    <GifGrid category={category} key={category}/>
                ))}
            </ul>
        </>
    );
}

export default GifExpectApp;
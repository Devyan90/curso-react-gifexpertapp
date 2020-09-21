import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Pokémon'];

    const [categories, setCategories] = useState(['Pokémon']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map((category) => {
                    //return <li key={ category }> {category} </li>
                    return <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    })
                }
            </ol>



        </div>
    )
}


// snippet rafc
import React from 'react';

const CatList = (props) => {

    const catsList = props.catPics.map(cat => {
        return (
            <li key={cat.id}>
                <img src={cat.url} alt="" />
            </li>
        )
    })
    return (
        <div>
            {catsList}
        </div>
    );
}

export default CatList;

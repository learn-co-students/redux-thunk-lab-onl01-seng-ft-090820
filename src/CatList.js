// write your CatList component here
import React from 'react'

const CatList = ({catPic}) => {
    return (
        <div>
            <p>Cat Pic </p>
            <div>{catPic.url}</div> 
        </div>
    )
    
}
export default CatList;
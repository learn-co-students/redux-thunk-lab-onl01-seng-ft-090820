// write your CatList component here
import React from 'react'

const CatList = ({catPic}) => {
    return (
        <div>
            <p>Cat Pic </p>
            <div>
                <img>{catPic.source_url}</img>
                </div> 
        </div>
    )
    
}
export default CatList;
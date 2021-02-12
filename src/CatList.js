// write your CatList component here
import React from 'react'

const CatList = (props) => {

    const catLi = () => {
        //console.log(props)
        return props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt={catPic.id}/>)
        //props.catPics.map(catPic => console.log(catPic.url))
    }
    return (
        <div>
            <p>Cat Pic </p>
            <div>
                {catLi()}
            </div> 
        </div>
    )
    
}
export default CatList;
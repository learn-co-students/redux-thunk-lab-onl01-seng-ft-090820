// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component {
    render() {
        const catList = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/>)

        return (
            <div>
                {catList}
            </div>
        )
    }
}

export default CatList
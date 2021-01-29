import React, { Component } from 'react';

class CatList extends Component {

    catsList = () => {
        return this.props.catPics.map(pic => 
            <img key={pic.id} 
                src={pic.url}
                alt={pic.id} 
            />
        )
    }

    render() {
        return (
            <div>
                {this.catsList()}
            </div>
        )
    }
}

export default CatList

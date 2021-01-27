// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        const { catPics } = this.props
        return (
            <div>
                {catPics.map(c => <div> <img src={c.url} alt="catpic"/> </div>)}
            </div>
        )
    }
}

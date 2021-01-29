import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {   
  // when App mounts succesfully call fetchCats() and store the return in this.props
  componentDidMount() {
    this.props.fetchCats()
  }

  // because a fetch is asynchronous we never know when it will complete
  // because of that we use the props.loading, before we start the actual fetch we can display
  // a message that content is getting loaded in background
  // when the fetch is completed the else path will be followed and CatList be called with passing
  // of the {this.props.catPics} object
  catHandling = () => {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Getting Cat Pics....</div>
    } else {
      return < CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* here we start 'questioning if the fetch is completed ot not */}
        {this.catHandling()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps, { fetchCats })(App)
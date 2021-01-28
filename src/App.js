import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

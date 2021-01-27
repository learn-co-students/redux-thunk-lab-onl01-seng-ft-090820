import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'
class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    if (this.props.loading === true){
      return <div> Purrrlease wait while your images are loading</div>
    }
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading}
        < CatList catPics={this.props.catPics} /> 
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



export default connect(mapStateToProps, { fetchCats } )(App);


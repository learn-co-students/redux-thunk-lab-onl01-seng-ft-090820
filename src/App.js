import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';
 
class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    const catList = this.props.catPics.map(catPic => <CatList key={catPic.id} catPic={catPic} />)
  
    console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        <div>
          {catList}
        </div>  
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
import { connect } from 'react-redux'

import App from './../components/App';


const mapStateToProps = (state, props) => {
  return {
    props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer

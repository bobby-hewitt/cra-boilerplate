import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'

class Home extends Component {

	onClick(){
		this.props.push('/hello')
	}
	render(){
		return(
			<div className="home" onClick={this.onClick.bind(this)}>
				<h1>hello</h1>
				<h2>hello</h2>
				<h3>hello</h3>
				<h4>hello</h4>
				<h5>hello</h5>
				<h6>hello</h6>
				<p>hello</p>
				

			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
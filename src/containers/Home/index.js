import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'

import { Header, Line, Hero, Paragraph, Subheader, Button, BackgroundImage, Gradient, Tint, Flex, Section } from 'components'

class Home extends Component {

	constructor(props){
		super(props)
		this.state = {
			lineExtended: false
		}
	}

	render(){
		return(
			<div className="home">
				<Section
					style={{height:'75vh'}}
					backgroundTint
					backgroundImage="https://images.unsplash.com/photo-1548611716-bd56b0f5aaa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80">
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy="Hey there" color="primary"/>
						<Line />
						<Flex type="row" justify="start" align="start">
							<Button copy="This is a button" secondary action={() => console.log('clicked')}/>
							<Button inactive copy="This is another button" secondary action={() => console.log('clicked')}/>	
						</Flex>
					</Flex>
				</Section>
				<Section
					style={{height:'75vh'}}>
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy="Useful template" color="inverse"/>
						<Line secondary/>
						<Flex type="row" justify="start" align="start">
							<Button copy="This is a button" action={() => console.log('clicked')}/>
							<Button inactive copy="This is another button" action={() => console.log('clicked')}/>	
						</Flex>
					</Flex>
				</Section>	
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
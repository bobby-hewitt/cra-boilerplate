import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'

import { Header, Line, Hero, Paragraph, TextInput, Subheader, Button, BackgroundImage, Gradient, Tint, Flex, Section } from 'components'

class Home extends Component {
	render(){
		return(
			<div className="home">
				<Section
					backgroundTint
					backgroundImage="https://images.unsplash.com/photo-1548611716-bd56b0f5aaa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80">
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy=" " color="primary"/>
						<Line />
						<Flex type="row" justify="start" align="start">
							<Button copy="This is a button" secondary action={() => console.log('clicked')}/>
							<Button inactive copy="This is another button" secondary action={() => console.log('clicked')}/>	
						</Flex>
					</Flex>
				</Section>
				<Section
					>
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy=" " color="inverse"/>
						<Line secondary/>
						<Flex type="row" justify="start" align="start">
							<Button copy="This is a button" action={() => console.log('clicked')}/>
							<Button inactive copy="This is another button" action={() => console.log('clicked')}/>	
						</Flex>
					</Flex>
				</Section>
				<Section
					backgroundTint
					backgroundImage="https://images.unsplash.com/photo-1548611716-bd56b0f5aaa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80">
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy=" " color="primary"/>
						<Line />
						<TextInput placeholder="This is a text input"/>
					</Flex>
				</Section>	
				<Section
					>
					<Flex type="column" fill justify="center" align="start" >
						<Hero copy=" " color="inverse"/>
						<Line secondary/>
						<TextInput secondary placeholder="This is a text input"/>
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
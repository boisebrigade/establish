import React from 'react';

import Header from '../components/Header'
import Search from '../components/Header/Search'
import Category from '../components/Category'
import Footer from '../components/Footer'

import Body from '../components/Body'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }
  }

  handleChange = event => this.setState({
    categories: event.target.value.length > 0 ? this.state.categories.filter(category => category.name.toLowerCase().includes(event.target.value.toLowerCase())) : this.props.data
  });

  componentDidMount() {
    this.setState({
      categories: this.props.data
    })
  }

  render() {
    return <>
      <Header
        center={<Search handleChange={this.handleChange} />}
      />
      <Body>
      {this.state.categories.map((category, i) => {
        return <Category key={i} {...category}  />
      })}
      </Body>
      <Footer />
    </>
  }
}

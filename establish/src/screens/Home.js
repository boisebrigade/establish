import React from 'react';

import Header from '../components/Header'
import Search from '../components/Header/Search'
import Category from '../components/Category'
import Footer from '../components/Footer'

import Body from '../components/Body'

export default props => {
  const {
    data: categories
  } = props

  console.log(props)
  // const handleChange = event => this.setState({
  //   filteredCategories: this.state.categories(category => category.name.toLowerCase().includes(event.target.value.toLowerCase()))
  // });

  return <>
    <Header
      center={<Search handleChange={console.log}/>}
    />
    <Body>
    {categories.map((category, i) => {
      return category.resources.length > 0 ? <Category key={i} {...category}/> : null
    })}
    </Body>
    <Footer />
  </>
}

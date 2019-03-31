import React from 'react';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Title from '../components/Header/Title'
import Share from '../components/Header/Share'
import Favorite from '../components/Header/Favorite'

import Footer from '../components/Footer'

import Body from '../components/Body'


class Availability extends React.Component {
  constructor() {
    super()

    this.state = {
      extended: false
    }
  }

  toggleExpanded = event => this.setState({
    expanded: !this.state.extended
  })

  render() {
    return this.state.extended ?
        <div onClick={this.toggleExpanded}>
          <span>Hours</span>
        </div>

      :
        <div onClick={this.toggleExpanded}>
          <span>Hours Today</span>

        </div>
  }
}

export default props => {
  const {
    match: {
      params: {categoryId, resourceId}
    },
    data
  } = props

  const [{
    name,
    resources: resources = [],
  }] = data.filter(category => category.id === categoryId)


  const [{
    title,
    address = null,
    phone = null,
    email = null,
    links = [],
    description = null,
    availability = null,
  }] = resources.filter(resource => resource.id === resourceId)


  console.log(data)
  return (
    <>
      <Header
        left={<Back />}
        center={<Title>{name}</Title>}
        right={<>
          <Favorite />
          <Share />
        </>}
        />
      <Body>
        <div className="topPadding resourcePage">
          {title ? <div className="resourceTitle">
            {title}
          </div>: null}
          {address ? <div className="address">
            123 Placeholder St
          </div>: null}
          {phone ? <div className="phone">
            <a href={`tel:${phone}`}>{phone}</a>
          </div>: null}
          {email ? <div className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </div> : null}
          {links.length > 0 ? <div className="urls">
            {links.map((link, i) => {
              console.log(link)
              return <a className='db' key={i} href={link}>{link}</a>
            })}
          </div> : null}
          {availability ? <Availability hours={availability} /> : null}
          {description ? <div className="description" dangerouslySetInnerHTML={{__html: documentToHtmlString(description)}} /> : null}
        </div>
      </Body>
      <Footer/>
    </>
  )
}

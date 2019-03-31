import React from 'react';

import Back from '../components/Header/Back'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Header/Title'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Share from "../components/Header/Share"
import Favorite from "../components/Header/Favorite"

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
    website = null,
    description = null,
  }] = resources.filter(resource => resource.id === resourceId)



  return (
    <>
      <Header>
        <Back />
        <Title>{name}</Title>
        <Favorite />
        <Share />
      </Header>
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
          {website ? <div className="urls">
            <a href={website}>{website}</a>
          </div> : null}
          {description ? <div className="description" dangerouslySetInnerHTML={{__html: documentToHtmlString(description)}} /> : null}
        </div>
      <Footer/>
    </>
  )
}

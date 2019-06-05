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
    extended: !this.state.extended
  })

  render() {
    const daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = daysInAWeek[new Date().getDay()]

    const hoursByDay =
        day => this.props[day] ? this.props[day].callForAvailability ? this.props[day].callForAvailability : this.props[day].hours : 'Closed';

    return this.state.extended ?
        <div>
          <div onClick={this.toggleExpanded} className="pb2">
            Hours
            <img className='ml3' src='/assets/actions/collapse.svg' alt='' />
          </div>
          <table>
            <tbody>
            {daysInAWeek.map((day, i) => {
              return <tr key={i}>
                <td className='day'>{day}:</td>
                <td>{hoursByDay(day)}</td>
              </tr>
            })}
            </tbody>
          </table>
        </div>
      :
        <div onClick={this.toggleExpanded}>
          <div className="pb2">
            Hours Today
            <img className='ml3' src='/assets/actions/expand.svg' alt='' />
          </div>
          <div className="day">{hoursByDay(currentDay)}</div>
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
    phoneNumber = null,
    email = null,
    website = null,
    description = null,
    availability = null,
  }] = resources.filter(resource => resource.id === resourceId)


  const standAloneMode = () =>
    (window.matchMedia('(display-mode: standalone)').matches) || ('standalone' in window.navigator)

  const mapLink = address =>
    standAloneMode() ? `maps://maps.google.com/maps?q=${address}` : `https://maps.google.com/maps?q=${address}`

  return (
    <>
      <Header
        left={<Back />}
        center={<Title>{name}</Title>}
        right={<>
          <Favorite id={resourceId} />
          <Share />
        </>}
        />
      <Body>
        <div className="resourcePage">
          {title ? <div className="resourceTitle">
            {title}
          </div>: null}
          {address ? <div className="address pv3">
            <a href={mapLink(address)}>{address}</a>
          </div>: null}
          {phoneNumber ? <div className="phone pb2">
              <a className='db' href={phoneNumber.getURI()}>{phoneNumber.formatNational()}</a>
          </div> : null}
          {email ? <div className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </div> : null}
          {website ? <div className="urls">
              <a className='db' href={website}>{website}</a>
          </div> : null}
          {availability ? <Availability {...availability} /> : null}
          <hr />
          {description ? <div className="description" dangerouslySetInnerHTML={{__html: documentToHtmlString(description)}} /> : null}
        </div>
      </Body>
      <Footer/>
    </>
  )
}

import React from 'react';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Title from '../components/Header/Title'
import Share from '../components/Header/Share'
import Favorite from '../components/Header/Favorite'

import Footer from '../components/Footer'

import Body from '../components/Body'

import moment from 'moment'

class Availability extends React.Component {
  constructor() {
    super()

    this.state = {
      extended: true
    }
  }

  toggleExpanded = event => this.setState({
    extended: !this.state.extended
  })

  static timeFormat(time) {
    return moment(time, 'HHmm').format('hh:mm a')
  }

  static displayTime(time) {
    if (time.includes('x')) {
      return 'Closed'
    } else if (!time && time === null) {
      return 'Contact for Availability'
    } else {
      const [startTime, endTime] = time

      return `${Availability.timeFormat(startTime)}, ${Availability.timeFormat(endTime)}`
    }
  }

  render() {
    const currentDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()]

    const hoursToday = this.props[currentDay] ? this.props[currentDay] : null

    return this.state.extended ?
        <div onClick={this.toggleExpanded}>
          <div className="pb2">Hours</div>
          <table>
          {Object.keys(this.props).map((day, i) => {
            return <tr key={i}>
              <td className='day'>{day}:</td>
              <td>{Availability.displayTime(this.props[day])}</td>
            </tr>
          })}
          </table>
        </div>
      :
        <div onClick={this.toggleExpanded}>
          <div className="pb2">Hours Today</div>
          <div className="day">{Availability.displayTime(hoursToday)}</div>
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
    phone: phoneNumbers = [],
    email = null,
    links = [],
    description = null,
    availability = null,
  }] = resources.filter(resource => resource.id === resourceId)

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
        <div className="resourcePage">
          {title ? <div className="resourceTitle">
            {title}
          </div>: null}
          {address ? <div className="address pv3">
            123 Placeholder St
          </div>: null}
          {phoneNumbers.length > 0 ? <div className="phone pb2">
            {phoneNumbers.map((phone, i) => {
              return <a key={i} className='db' href={`tel:${phone}`}>{phone}</a>
            })}
          </div> : null}
          {email ? <div className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </div> : null}
          {links.length > 0 ? <div className="urls">
            {links.map((link, i) => {
              return <a key={i} className='db' href={link}>{link}</a>
            })}
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

import React from 'react'
import { Link } from 'react-router-dom'

const Ideas = props => props.ideas.map((idea, i, ideas) => (
  i === ideas.length - 1
    ? <span className="ideas" key={i}>{idea}</span>
    : <span className="ideas" key={i}>{idea} | </span>
))

export default props => {
  const {
    id,
    name,
    icon,
    ideas
  } = props

  return (
    <Link to={`/category/${id}/${name.replace(/ /g, '-')}`} className={`card`}>
      <img className="icons" src={icon} alt={name} />
      <div className="category">
        <div>
          {name}
        </div>
        <div className="ideas">
          <Ideas ideas={ideas}/>
        </div>
      </div>
    </Link>
  )
}

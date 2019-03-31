import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Title from '../components/Header/Title'
import Footer from '../components/Footer'
import Share from '../components/Header/Share'

// const Resources = props => props.resources.map((resource, j) =>
//     <React.Fragment key={j}>
//         <Link to={`/resource/${props.category.name}/${props.subcategory.name}/${resource.name}`} className="resourceList">
//             <div className="resources">
//                 {resource.name}
//             </div>
//             <img src="/icons/back.svg" alt={resource.name} className="gotoPage" />
//         </Link>
//     </React.Fragment>
//   )

//
// const Subcategories = props => props.subcategories.map((subcategory, i) =>
//     <React.Fragment key={i}>
//         <div className="subcategoryList">
//             <div className="subcategories">
//                 {subcategory.name}
//             </div>
//             <div>
//                 <Resources subcategory={subcategory} category={props.category} resources={subcategory.resources} />
//             </div>
//         </div>
//     </React.Fragment>
// );

export default props => {
  console.log(props)
  const {
    match: {
      params: {categoryId, categoryName}
    },
    data,
  } = props

  const [{
    name,
    resources = [],
  }] = data.filter(category => category.id === categoryId)


  return (
    <>
      <Header
        left={<Back />}
        center={<Title>{name}</Title>}
        right={<Share/>}
      />
      <div className="listScreen">
        <div className="topPadding">
          {resources.map((resource, i ) => {
            return <React.Fragment key={i}>
              <Link to={`/resource/${categoryId}/${categoryName}/${resource.id}/${resource.title.replace(/ /g, '-')}}`} className="resourceList">
                <div className="resources">
                  {resource.title}
                </div>
              </Link>
            </React.Fragment>
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Footer from '../components/Footer'

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
      params: {categoryId: categoryId, categoryName: categoryName}
    },
    data: data
  } = props

  const [{
    resources: resources = [],
  }] = data.filter(category => category.id === categoryId)


  return (
    <>
      <Header>
        <Back />
      </Header>
      <div className="listScreen">
        <div className="topPadding">
          {resources.map((resource, i ) => {
            return <React.Fragment key={i}>
              <Link to={`/category/${categoryId}/${categoryName}/${resource.id}/${resource.title}`} className="resourceList">
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

import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { Storage } from "../Storage";

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFavorites = async () => {
      await Storage.open
      const favorites = await Storage.table('favorites').toArray()
      return Storage.table('resources').where('id').anyOf(favorites.map(favorite => favorite.id)).toArray()
    }
    getFavorites().then(resources => setFavorites(resources || []))
  })

  return (
    <>
      <Header left={<Back/>} />
      <Body>
        <div className='listScreen mt3 mb3 flex flex-column'>
          {favorites.filter(resource => resource).map((resource, i) =>
            <Link key={i} to={`/resource/${resource.category.id.substr(0, 6)}/${resource.category.name}/${resource.id}/${resource.title.replace(/ /g, '-')}}`}>
              <div className='flex bb b--white ml4'>
                <div className='resources pb3 mt3 pr4'>{resource.title}</div>
                <img className='ml-auto pr3' src={'/assets/actions/forward.svg'} alt=''/>
              </div>
            </Link>
          )}
      </div>
      </Body>
      <Footer/>
    </>
  )
}


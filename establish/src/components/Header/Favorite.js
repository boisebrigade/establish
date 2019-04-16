import React, { useState, useEffect } from 'react'
import { Storage } from "../../Storage";



function Favorite({ id }) {
  const [isFavorite, setFavorite] = useState(false);
  useEffect(() => {
    Storage.open()
      .then(() => Storage.table('favorites').get(id)
        .then(isFavorite => setFavorite(isFavorite && true)))
  })

  const onFavorite = async (id) => {
    await Storage.open();
    const favorites = Storage.table('favorites');
    const isFavorite = await favorites.get(id);
    if (isFavorite) {
      setFavorite(false);
      return favorites.delete(id);
    } else {
      setFavorite(true);
      return favorites.add({id});
    }
  }

  return (
    <div className='h-100 flex ml-auto' onClick={() => onFavorite(id)}>
      <img className='ml3 h-100 w-100' src={`/assets/actions/favorite${isFavorite ? '-active' : ''}.svg`} alt='favorite'/>
    </div>
  )
}

export default Favorite

import React from 'react'

const Favorite = ({isFavorite = false, onFavorite}) =>
  <div className='header__item h-100 flex' onClick={onFavorite}>
    <img className='ml3' src={`/assets/actions/favorite${isFavorite ? '-active' : ''}.svg`} alt='favorite' />
  </div>

export default Favorite

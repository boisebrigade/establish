import React from 'react'

const Favorite = ({isFavorite = false, onFavorite}) =>
  <div className='h-100 flex ml-auto' onClick={onFavorite}>
    <img className='ml3 h-100 w-100' src={`/assets/actions/favorite${isFavorite ? '-active' : ''}.svg`} alt='favorite' />
  </div>

export default Favorite

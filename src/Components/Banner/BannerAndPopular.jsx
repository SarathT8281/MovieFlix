import React from 'react'
import LatestBanner from './LatestBanner'
import Latest from '../Genre/Latest'
import PopularBanner from './PopularBanner'
import Popular from '../Genre/Popular'

function BannerAndPopular() {
  return (
    <div className='main'>
        <div className='separate'>
            <PopularBanner/>
            <Popular/>


        </div>

    </div>
  )
}

export default BannerAndPopular
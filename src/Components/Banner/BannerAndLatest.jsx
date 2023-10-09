import React from 'react'
import LatestBanner from './LatestBanner'
import Latest from '../Genre/Latest'

function BannerAndLatest() {
  return (
    <div className='main'>
        <div className='separate'>
            <LatestBanner/>
            <Latest/>


        </div>

    </div>
  )
}

export default BannerAndLatest
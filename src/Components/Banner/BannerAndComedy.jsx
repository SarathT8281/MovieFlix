import React from 'react'
import LatestBanner from './LatestBanner'
import Latest from '../Genre/Latest'
import ComedyBanner from './ComedyBanner'
import Comedy from '../Genre/Comedy'

function BannerAndComedy() {
  return (
    <div className='main'>
        <div className='separate'>
            <ComedyBanner/>
            <Comedy/>


        </div>

    </div>
  )
}

export default BannerAndComedy
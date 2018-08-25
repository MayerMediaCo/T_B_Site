import React from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const map = () => {
  return (
    <Map defaultCenter={[41.931894, -87.939721]} zoom={17} width={782} height={782}>
      <Marker
        anchor={[41.931894, -87.939721]}
        payload={1}
        animate={false}
        onClick={({event, anchor, payload}) => {}}/>

      <Overlay
        anchor={[41.931894, -87.939721]}
        offset={[0, 0]}
        className='pigeon-drag-block pigeon-click-block'></Overlay>
    </Map>
  )
}

export default map
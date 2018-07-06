import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import Checklist from '../../img/checklist.jpg'
import Clipboard from '../../img/clipboard.jpg'
import Laptop from '../../img/laptop.jpg'

const ServiceCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={Checklist}/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={Clipboard}/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={Laptop}/>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default ServiceCarousel
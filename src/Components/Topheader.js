import React from 'react'
import { Image } from 'react-bootstrap'

const Topheader = ({href,Image,alt}) => {
  return (
    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_7">
    <a href={href}>
        <div class="aspectRation col4">
            <img src={Image} alt={alt} />
        </div>
    </a>
</div>
  )
}

export default Topheader
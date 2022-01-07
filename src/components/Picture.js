import React from 'react'

const Picture = ({data}) => {
  return (
    <div>
      <div className="picture">
        <p>{data.photographer}</p>
        <div className="imageContainer">
          <img src={data.src.large} alt="" />
        </div>
        <p>
          Download Image <a target="_blank" href={data.src.large}>Click here</a>
        </p>
      </div>
    </div>
  )
}

export default Picture

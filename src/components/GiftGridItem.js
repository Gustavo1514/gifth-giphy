import React from 'react'

export const GiftGridItem = img => {
  // console.log(img);

  const { id, title, url } = img.img
  // console.log(title, url, id);
  return (
    <div className='card animate__animated animate__fadeInDown'>
      <img src={url} alt='title' width='100' />
      <p>{title}</p>
    </div>
  )
}

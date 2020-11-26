import React from 'react'

export const GiftGridItem = (img) => {
    // console.log(img);

    const { id, title, url } = img.img
    // console.log(title, url, id);
    return (
        <div className='card'>
            <img src={url} alt="title" width='100' />
            <p>{title}</p>
        </div>
    )
}

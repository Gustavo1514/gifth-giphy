import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiftGridItem } from './GiftGridItem'

export const GifGrid = ({ category }) => {
  // const [images, setimages] = useState([])

  const { data: images, loading } = useFetchGifs(category)
  // console.log(state);

  // useEffect(() => {

  //     const getGifsHelper = async () => {
  //         let gifs = await getGifts(category)
  //         console.log(gifs);
  //         setimages(gifs)

  //     }
  //     getGifsHelper()
  // }, [category])

  // getGifts()
  return (
    <>
      <h3 className='card animate__animated animate__fadeInDown'>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {images.map(item => (
          // <li key={item.id}>{item.title}</li>

          <GiftGridItem img={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

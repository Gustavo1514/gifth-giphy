import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifts(category).then(imgs => {
            setTimeout(() => {
                console.log(imgs);
                setstate({
                    data: imgs,
                    loading: false
                })
            }, 2000);
        })


    }, [category])



    console.log(' xdcd');

    return state
}

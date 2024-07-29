import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {apiInstance } from "../../service/api"
import React from "react"

const newPost = () => {
  const { id } = useParams()
  const [data, setData] = useState<Game>()
  const getEscolhido = async () =>{
    try {
    const resp = await apiInstance.get(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
    setData(resp.data)
    } catch (error) {
      console.log(error)      
    }
    
  }
  useEffect(() => {
    getEscolhido()
  }, [])
  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.media.thumbnail} alt="" />
      <p>{data?.description}</p>
      <p>{data?.prices?.current}</p>
    </div>
  )
}

export default newPost
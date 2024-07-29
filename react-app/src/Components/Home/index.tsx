import { SetStateAction, useEffect, useState } from "react"
import api from "../../service/api"
import Card from "../Card"

import * as S from './styles'
import React from "react"
import Formulario from "../Formulario"
import axios from "axios"

const Home = () => {
  const [data, setData] = useState<Game[]>([])
  const [user, getUser] = useState<User[]>([])
  const getLinguas = (game:Game) => {
    const tag = []

    if(game.prices?.discount){
      tag.push(`${game.prices.discount}%`)
    }
    if(game.prices?.current){
      tag.push(`$${game.prices.current}`)
    }
    return tag
  }

  const getByUser = async () => {
    try {
      await api.getUsers().then((response: {data:User[]}) => response.data)
      .then((data:User[]) => getUser(data))
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const sendUser = async () => {
    try {
      getByUser()
    } catch (error) {
      console.log(error)
    }
  }
  const getPost = async () => {

    try {
      await api.getFeaturedPromocoes()
      .then((response: { data: any }) => response.data)
      .then((data: SetStateAction<Game[]>) => setData(data))

    } 
    catch (error) {
      console.log(error)
      
    }
  
  }


const handleDelete = async (id: string) => {
  try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      getByUser()
      console.log('Usuário deletado com sucesso:', response.data);
  } catch (error) {
      console.error('Erro ao deletar usuário:', error);
  }
};


  useEffect(() => {
    getPost()
    getByUser()
  }, [])
  
  return (
    <div>
      <h1>Promoçoes</h1>
      <S.Ul>
        {data.map((item:Game) => {
          return (
            
                <li key={item.id} >
                        <Card
                        id={String(item.id)}
                        title={item.name}
                        description={item.description}
                        price={getLinguas(item)}
                        image={item.media.thumbnail}/>
                      </li>
          )
        })}

      </S.Ul>

      <Formulario onSubmit={sendUser} />
      
      {
        user.map((item:User) => {
          return (
            <div key={item.id}>
              <h1>{item.nome}</h1>
              <button type="submit" onClick={() => {
                handleDelete(String(item.id))
              }}>Delete</button>
            </div>
          )
        })
      }
    </div>
  
  )
}


export default Home
import { Link } from 'react-router-dom'
import * as S from './styles'
import React from 'react'

interface Props {
    id: string
    title: string
    description: string
    price: string[]
    image: string
}

function getDescription(descricao:string) {
    if(descricao.length> 90){
        return descricao.slice(0, 92) + '...'
    }
}

const Card = ({id,title,description,price,image}:Props) => {
    return (
            <S.CardContainer>
               <div>
               <img src={image} alt="" />
                <h2>{title}</h2>
                <p >{price}</p>
                <p>{getDescription(description)}</p>
                <Link to={`/post/${id}`}>Ver mais</Link>
               </div>
            </S.CardContainer>
    )
}

export default Card
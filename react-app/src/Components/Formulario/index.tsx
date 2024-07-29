import React, {useEffect, useState} from "react"
import axios from 'axios'

interface Props {
    onSubmit: () => void
}

const Formulario = ({onSubmit}: Props) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/users', {
                nome:nome,
                email:email,
                senha:senha
            })
            console.log('User created', response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="nome">Nome</label>
                <br />
                <input type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                />
        </div>
        <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            
        </div>
        <div>
                <label htmlFor="senha">Senha</label>
                <br />
                <input type="passworld"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                />
        </div>
        <button type="submit" onSubmit={onSubmit}>Register</button>
            </form>
        </>
    )
}

export default Formulario
import { useNavigate } from "react-router-dom"

export default function Error(){

    const retornar = useNavigate()

    const voltar = ()=> retornar('/')

    return(
        <>
            <h1>Erro 404 - Página não encontrada</h1>
            <button onClick={voltar}>Voltar a página inicial</button>
        </>
    )
}
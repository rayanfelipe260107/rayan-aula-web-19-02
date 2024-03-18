import Link from 'next/link';
export default function ListaUsuarios () {
    return(
        <>
            <h1>Usuários</h1>

            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <Link href={"/"}>
            Voltar
            </Link>
            
        </>
    )
}
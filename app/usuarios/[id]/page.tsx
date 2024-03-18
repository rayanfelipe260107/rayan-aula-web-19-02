import Link from 'next/link';
export default function PerfilUsuario ({ params }: {params: { id: string} }) {
    return(
        <>
            <h1>Perfil</h1>
            <p>Nome do Usuário</p>

            <Link href={"/usuarios"}>
            Voltar
            </Link>
            
        </>
    )
}
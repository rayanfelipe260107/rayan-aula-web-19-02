import Link from 'next/link';

import usuarios from '@/src/usuarios';

export default function PerfilUsuario ({ params }: {params: { id: string} }) {

    const usuario = usuarios.filter((usu,index,array) => usu.id === parseInt(params.id));

    return(
        <>
            <h1>Perfil</h1>
            <div>
                <p>Nome: {usuario[0].nome}</p>
                <p>Altura: {usuario[0].altura}</p>
                <p>Ativo: {usuario[0].ativo ? 'Sim' : 'Não'}</p>
            </div>

            <Link href={"/usuarios"}>
            Voltar
            </Link>
            
        </>
    )
}
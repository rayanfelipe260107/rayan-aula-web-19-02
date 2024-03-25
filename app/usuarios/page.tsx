import Link from 'next/link';

import usuarios from '../../src/usuarios';

export default function ListaUsuarios () {
    // console.log(usuarios);
    return(
        <>
            <h1>Usuários</h1>

           {/* <p><Link href={'/usuarios/1'}>Usuário 1</Link></p>
            <p><Link href={'/usuarios/2'}>Usuário 2</Link></p>
            <p><Link href={'/usuarios/3'}>Usuário 3</Link></p> */}

            {/* {
                usuarios.map((usuario) => <p>Nome: {usuario.nome}</p>)
            } */}

            {
                usuarios.map((usuario) => <p><Link href={`/usuarios/${usuario.id}`}>{usuario.nome}</Link>
                </p>)
            }

            <Link href={"/"}>
            Voltar
            </Link>
            
        </>
    )
}
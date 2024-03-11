import Link from "next/link";

export default function Page() {
  return(
    <>
    <h1>Hello, Next.js!</h1>
    <h2>Título 2</h2>
    <h3>Título 3</h3>

    <ul>
      <li><Link href={'/sobre'}>Sobre</Link></li>
      <br></br>
      <li><Link href={'/cadusuario'}>Cadastro de Usuário</Link></li>
    </ul>

    </>
  )
}
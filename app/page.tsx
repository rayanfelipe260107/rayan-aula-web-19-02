import Link from "next/link";

export default function Page() {
  return(
    <>
    <h1>Hello, Next.js!</h1>
    <h2>Título 2</h2>
    <h3>Título 3</h3>
    Qualquer coisa
    

    <Link href={'/sobre'}>Sobre</Link>
    <Link href={'/cadusuario'}>Cadastro de Usuário</Link>
    </>
  )
}
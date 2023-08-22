import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Sucess() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>
      <p>
        Uhuul <strong>Gabriella</strong>, sua <strong>Camiseta</strong> já está a caminho da sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo.</Link>
    </SuccessContainer>
  )
}
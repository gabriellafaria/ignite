import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import Image from 'next/image';

import { Container, Header } from '@/styles/pages/app';
const logo: string = require("../assets/logo.svg").default

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

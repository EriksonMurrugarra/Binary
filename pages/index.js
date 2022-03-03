import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";

const NavigationBar = styled.div`
  background: #FAFAFA;
  box-shadow: 1px 1px 2px #CCCCCC;
  z-index: 100;
  
  .logo {
    margin: 0;
    padding: 1rem;
    letter-spacing: 5px;
  }
  
  .logo span {
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: 2px
  }
`

const MainBanner = styled.div`
  padding: 5rem;
  background-image: url("images/map.png");
  background-position: right;
  background-repeat: no-repeat;
  box-shadow: 1px 1px 5px #CCCCCC;
  
  .hero {
    background: rgb(255, 255, 255, 0.5);
    padding: 1rem;
  }
  
  .text {
    background: rgb(255, 255, 255, 0.5);
    padding: 1rem;
  }
`

const Features = styled.div`
  padding: 5rem;
  padding-top: 2rem;
`

const FeatureItem = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #FAFAFA;
  box-shadow: 1px 1px 5px #CCCCCC;
`

const Footer = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Binary Academy</title>
        <meta name="description" content="Aprende de los mejores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar>
        <h1 className="logo">Binary <span>Academy</span></h1>
      </NavigationBar>
      <MainBanner>
        <h2 className="hero">Aprende con expertos que trabajan en proyectos a escala global en distintas partes del mundo!</h2>
        <p className="text">Con Binary aprenderas a hacer las cosas como se hacen y construyen en el mundo real, con entrenadores expertos con miles de horas en el mercado internacional.</p>
      </MainBanner>
      <Features>
        <h2>Lo que te ofrecemos</h2>
        <FeatureItem>
          <h3>Experiencia Internacional</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
        <FeatureItem>
          <h3>Sesiones en Vivo</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
        <FeatureItem>
          <h3>Mentorias</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
        <FeatureItem>
          <h3>Grupos x5</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
        <FeatureItem>
          <h3>Clases Personalizadas</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
        <FeatureItem>
          <h3>Roadmap Comprobado</h3>
          <p>Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem Lorem ipsum cavis ndeidm laitpm impseurem </p>
        </FeatureItem>
      </Features>
      <Footer>
        Binary Academia 2022. PE / NL
      </Footer>
    </>
  )
}

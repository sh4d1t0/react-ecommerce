import tw, { styled } from 'twin.macro'
import { Button } from './components/atoms/Button'
import logo from './images/logo.svg'

const Container = styled.div`
  ${tw`text-3xl text-center font-bold text-gray-900 underline`}
`

const Home = () => {
  return (
    <Container>
      <h1>Proyecto e-Commerce creado en React y TypeScript</h1>
      <img src={logo} className="AppLogo" alt="logo" />
      <Button variant="contained">Entrar</Button>
    </Container>
  )
}

export default Home

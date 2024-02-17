import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'

function App() {
  return (
    <div>
      <Container>
       <Flex className="justify-between">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
       </Flex>
      </Container>
    </div>
  )
}

export default App
import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'

function FeatureProduct() {
  return (
    <section className='my-8'>
        <Container>
            <Flex className="flex-wrap gap-y-6 justify-between">
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>

            </Flex>
           
        </Container>
    </section>
  )
}

export default FeatureProduct
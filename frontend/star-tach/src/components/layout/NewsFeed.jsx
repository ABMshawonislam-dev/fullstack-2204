import React from 'react'

// common components here 
import Container from '../comon/Container'

const NewsFeed = () => {
  return (
    <>
    <section className='bg-[#F2F4F8] pt-[35px]'>
        <Container>
            <div className='bg-[#ddd] h-[40px] rounded-[30px] relative overflow-x-hidden flex'>
                <p className='pt-[9px]    animate-marquee whitespace-nowrap'>21st February Wednesday, all our outlets are closed except Uttara Sonargaon Janapath, Banani & Gazipur outlets. Our online activities will also remain closed.</p>
                <p className='pt-[9px]  pl-96  animate-marquee2 whitespace-nowrap absolute'>21st February Wednesday, all our outlets are closed except Uttara Sonargaon Janapath, Banani & Gazipur outlets. Our online activities will also remain closed.</p>
               
            </div>
        </Container>
    </section>
    </>
  )
}

export default NewsFeed
import React from 'react'
import { DualContent, HomePageIntro, CardSwipTopBtn, DesriptionCardSwip, Banner, Collage } from '../components/UI Componets/index'
import { womenBanner, womenItems, swipFromTopValue, humans, banner } from '../data/Women'
import { value, mens, collage, descSectionCard } from '../data/Men'
import { collection } from '../data/Collection'


const Women = () => {
  const ItemsScrollLeft = (clsName) => {
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft -= 350; 
  }
  const ItemsScrollRight = (clsName) => {
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft += 350; 
  }
  return (
    <main className='text-black'>
        <HomePageIntro data={womenBanner} />
        <CardSwipTopBtn
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={womenItems} 
            value={swipFromTopValue}
        />
        <DualContent 
            value = {value}
        />
        <DesriptionCardSwip 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={false}
            category={humans}
            value={mens}
        />
        <Banner value={banner} />
        <DesriptionCardSwip 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={collection}
            value={descSectionCard}
        />
        <Collage data={collage}/>
    </main>
  )
}

export default Women
import React from 'react'
import { DualContent, HomePageIntro, CardSwipTopBtn, Banner, Collage } from '../components/UI Componets/index'
import { homeBanner, accessoriesItems, accessoriesJewelery, swipFromTopValue, banner, 
        keyChains, keyChainTitle, jewels, vase, vaseHeading, collage } from '../data/Accessories'
import { value } from '../data/Accessories'

const Accessories = () => {
  const ItemsScrollLeft = (clsName) => {
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft -= 350; 
  }
  const ItemsScrollRight = (clsName) => {
      // console.log('clicked');
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft += 350; 
  }
  return (
    <main className='text-black'>
        <HomePageIntro data={homeBanner} />
        <CardSwipTopBtn
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={false}
            category={accessoriesItems} 
            value={swipFromTopValue}
        />
        <DualContent 
            value = {value}
        />
        <CardSwipTopBtn 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={keyChains}
            value={keyChainTitle}
        />
        <CardSwipTopBtn 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={false}
            category={accessoriesJewelery}
            value={jewels}
        />
        <Banner value={banner} />
        <CardSwipTopBtn 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={vase}
            value={vaseHeading}
        />
        <Collage data={collage}/>
    </main>
  )
}

export default Accessories
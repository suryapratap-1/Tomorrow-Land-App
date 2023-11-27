import React from 'react'
import { HomePageMensTShirt } from '../data/HomePageShirts'
import { Banner, CardSwip, CardSwipTopBtn, Collage, DesriptionCardSwip, DualContent, ItemsCard } from '../components/UI Componets/index'
import { jewelery } from '../data/Jwelery'
import { collection } from '../data/Collection'
import { dualContentValue, dualContentVid, swipFromTopValue, descSectionCard, homeBanner, banner1, collage } from '../data/Home'


const Home = () => {
  const ItemsScrollLeft = (clsName) => {
    const box = document.querySelector(`${clsName}`);
    box.scrollLeft -= 350; 
  }
  const ItemsScrollRight = (clsName) => {
    const box = document.querySelector(`${clsName}`);
    box.scrollLeft += 350; 
  }

  return (
    <main className='w-screen pt-16 overflow-x-hidden'>

        <Banner value={homeBanner} />

        <CardSwip 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            category={HomePageMensTShirt}
        />

        <DualContent value = {dualContentValue} />

        <CardSwipTopBtn 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={jewelery}
            value = {swipFromTopValue}
        />

        <Banner value={banner1} />

        <DesriptionCardSwip 
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={collection}
            value = {descSectionCard}
        />

        <DualContent value = {dualContentVid} />

        <Collage data={collage} />

    </main>
  )
}

export default Home
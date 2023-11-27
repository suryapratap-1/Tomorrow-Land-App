import React from 'react'
import { mensData } from '../data/Men'
import { DualContent, HomePageIntro, CardSwipTopBtn, DesriptionCardSwip, Banner, Collage } from '../components/UI Componets/index'
import { HomePageMensTShirt } from '../data/HomePageShirts'
import { collection } from '../data/Collection'
import { value, swipFromTopValue, descSectionCard, banner, collage, mens, humans } from '../data/Men'


const Men = () => {
    const ItemsScrollLeft = (clsName) => {
        const box = document.querySelector(`${clsName}`);
        box.scrollLeft -= 350; 
    }
    const ItemsScrollRight = (clsName) => {
        const box = document.querySelector(`${clsName}`);
        box.scrollLeft += 350; 
    }

    return (
        <main className='overflow-hidden text-black'>
            <HomePageIntro data={mensData} />
            <CardSwipTopBtn
                scrollLeft={ItemsScrollLeft}
                scrollRight={ItemsScrollRight}
                like={true}
                category={HomePageMensTShirt} 
                value={swipFromTopValue}
            />
            <DualContent 
                value = {value}
            />
            <DesriptionCardSwip 
                id={'bottom-scroll'}
                scrollLeft={ItemsScrollLeft}
                scrollRight={ItemsScrollRight}
                like={false}
                category={humans}
                value={mens}
            />
            <Banner value={banner} />
            <DesriptionCardSwip 
                id={'top-scroll'}
                scrollLeft={ItemsScrollLeft}
                scrollRight={ItemsScrollRight}
                like={true}
                category={collection}
                value = {descSectionCard}
            />
            <Collage data={collage}/>
        </main>
    )
}

export default Men
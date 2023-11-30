import React from 'react'
import { ButtonUI, CardSwipTopBtn } from '../components/UI Componets/index';
import { drawings, drawingDescription, paintings, paintingsDescription } from '../data/Art';

const Art = () => {
    const ItemsScrollLeft = (clsName) => {
        const box = document.querySelector(`${clsName}`);
        if (box.clientWidth > 767) box.scrollLeft -= box.clientWidth / 2; 
        else box.scrollLeft -= box.clientWidth; 
    }
      const ItemsScrollRight = (clsName) => {
        const box = document.querySelector(`${clsName}`);
        if (box.clientWidth > 767) box.scrollLeft += box.clientWidth / 2
        else box.scrollLeft += box.clientWidth; 
    }
    return (
        <main className='mt-20 text-black'>
            <CardSwipTopBtn
                id={"box1"}
                scrollLeft={ItemsScrollLeft}
                scrollRight={ItemsScrollRight}
                like={true}
                category={drawings} 
                value={drawingDescription}
            />
            <ButtonUI />
            <CardSwipTopBtn
                id={"box2"}
                scrollLeft={ItemsScrollLeft}
                scrollRight={ItemsScrollRight}
                like={true}
                category={paintings} 
                value={paintingsDescription}
            />
            <ButtonUI />
        </main>
    )
}

export default Art
import React from 'react'
import { ButtonUI, CardSwipTopBtn } from '../components/UI Componets/index';
import { drawings, drawingDescription, paintings, paintingsDescription } from '../data/Art';

const Art = () => {
  const ItemsScrollLeft = (clsName) => {
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft -= 350; 
  }
  const ItemsScrollRight = (clsName) => {
      const box = document.querySelector(`${clsName}`);
      box.scrollLeft += 350; 
  }
  return (
    <main className='mt-20 text-black'>
        <CardSwipTopBtn
            scrollLeft={ItemsScrollLeft}
            scrollRight={ItemsScrollRight}
            like={true}
            category={drawings} 
            value={drawingDescription}
        />

        <ButtonUI />

        <CardSwipTopBtn
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
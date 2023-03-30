import './style.css'
import { Content, content } from './mainContent'

/* MENU OPEN / CLOSE */
document.querySelector('.open')!.addEventListener('click', () => {
    document.querySelector('.menu-open')?.classList.replace('hide', 'flex')
    document.querySelector('.menu-closed')?.classList.replace('flex', 'hide')
    document.querySelector('.body-opacity')?.classList.toggle('hide')
    document.querySelector('body')?.classList.add('hidden-overflow')

})
document.querySelector('.close')!.addEventListener('click', () => {
    document.querySelector('.menu-open')?.classList.replace('flex', 'hide')
    document.querySelector('.menu-closed')?.classList.replace('hide', 'flex')
    document.querySelector('.body-opacity')?.classList.toggle('hide')
    document.querySelector('body')?.classList.remove('hidden-overflow')
})

/* SLIDES */
let index = 0
let showMobileImage: boolean = false

document.querySelector('.carouselNextControl')?.addEventListener('click', () => {
    document.querySelector('.carousel-inner')?.classList.remove('slideleft')
    // add 1 to index
    ++index

    // get current mediaQuery to decide what size to show on image
    const mediaQuery = window.matchMedia('(max-width:990px)')
    if (mediaQuery.matches) {
        showMobileImage = true
    }

    if (index > 2 || index < 0) {
        index = 0
        renderSlides(index, content)
    } if (index === 0) {
        renderSlides(index, content)
    } else if (index === 1) {
        renderSlides(index, content)
    } else if (index === 2) {
        renderSlides(index, content)
    }
})

document.querySelector('.carouselPrevControl')?.addEventListener('click', () => {
    document.querySelector('.carousel-inner')?.classList.remove('slideleft')
    // add 1 to index
    --index

    // get current mediaQuery to decide what size to show on image
    const mediaQuery = window.matchMedia('(max-width:990)')

    if (mediaQuery.matches) {
        showMobileImage = true
    }

    if (index > 2 || index < 0) {
        index = 2
        renderSlides(index, content)
    } if (index === 0) {
        renderSlides(index, content)
    } else if (index === 1) {
        renderSlides(index, content)
    } else if (index === 2) {
        renderSlides(index, content)
    }
})


/**
 * Render slide in hero section based on current index
 * @param index index of current slide
 * @param content in mainContent.ts
 */
const renderSlides = (index: number, content: Content[]) => {
    document.querySelector('.carousel-inner')?.classList.add('slideleft')
    document.querySelector('h1')!.innerHTML = `${content[index].headline}`
    document.querySelector('#description')!.innerHTML = `${content[index].description}`;

    if (showMobileImage) {
        (document.querySelector('.carousel-img') as HTMLElement).style.backgroundImage = `url('${content[index].mobileImage}')`
    } else {
        (document.querySelector('.carousel-img') as HTMLElement).style.backgroundImage = `url('${content[index].desktopImage}')`
    }
}
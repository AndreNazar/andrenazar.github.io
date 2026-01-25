
import ModalHelper from './ModalHelper';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'
import projects from "../public/data/projects.json"
import { openPreview } from './imagePreview/imagePreview'

const buttonsModal = document.querySelectorAll('.button-modal');
const emblaContainer = document.querySelector('.embla__container');
const modalHeading = document.querySelector('.modal-heading h1');
const modalLinks = document.querySelector('.modal-heading .links');
const fullDescriptionElement = document.querySelector('.full-description');
const demoElement = document.querySelector('.modal-helper .demo');
const modalLogo = document.querySelector('.modal-helper .modal-logo');
const mhElement:        HTMLElement | null = document.querySelector('.modal-helper');
const mhContentElement: HTMLElement | null = document.querySelector('.modal-helper-content-block');
const mhButtonClose:    HTMLElement | null = document.querySelector('.modal-helper-content-block .button-close');

buttonsModal.forEach((but, index) => {
  but.addEventListener('click', () => {
    const mh = new ModalHelper(mhElement);
    emblaContainer!.innerHTML = projects[index].images!.map(image => `<div class="embla__slide"><img src="${image}" alt="" /></div>`).join('')

    setTimeout(() => {
      emblaContainer!
        .querySelectorAll('img')
        .forEach(img => {
          img.addEventListener('click', () => {
            openPreview((img as HTMLImageElement).src)
          })
        })
    }, 0)

    modalHeading!.innerHTML = projects[index].title
    fullDescriptionElement!.innerHTML = projects[index].fullDescription

    modalLinks!.innerHTML = ""
    demoElement!.innerHTML = ""

    if(projects[index].link){
      demoElement!.innerHTML = `Демо: <a href='${projects[index].link}' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A9B1D6"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
        ${projects[index].title}
      </a>`;

      modalLinks!.innerHTML += `<a href='${projects[index].link}' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A9B1D6"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a>`
    }

    if(projects[index].github){
      modalLinks!.innerHTML += `<a href='${projects[index].github}' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" viewBox="0 0 191.51 186.79" fill="#A9B1D6"><path d="M95.76,0A95.76,95.76,0,0,0,65.48,186.61c4.79.89,6.55-2.07,6.55-4.6,0-2.29-.09-9.83-.13-17.83-26.64,5.79-32.26-11.3-32.26-11.3-4.36-11.06-10.64-14-10.64-14-8.69-5.94.65-5.82.65-5.82,9.62.68,14.68,9.87,14.68,9.87,8.55,14.64,22.41,10.4,27.87,8,.86-6.19,3.33-10.42,6.08-12.81C57,135.65,34.65,127.44,34.65,90.75A37.06,37.06,0,0,1,44.52,65c-1-2.4-4.27-12.14.93-25.33,0,0,8-2.57,26.34,9.82a90.63,90.63,0,0,1,48,0c18.28-12.39,26.3-9.82,26.3-9.82,5.22,13.19,1.94,22.94.94,25.34a37,37,0,0,1,9.85,25.7c0,36.78-22.4,44.88-43.72,47.25,3.43,3,6.5,8.8,6.5,17.74,0,12.81-.11,23.12-.11,26.27,0,2.55,1.72,5.54,6.57,4.6A95.77,95.77,0,0,0,95.76,0"/></svg></a>`
    }

    modalLogo!.setAttribute('src', projects[index].logo)
    mh.show('bottom', true)
  })
})

const onClose = () => {
  const mh = new ModalHelper(mhElement)
  mh.hide("bottom")
}


mhElement?.addEventListener('click', onClose)
mhButtonClose?.addEventListener('click', onClose)
document.addEventListener('keydown', (e: KeyboardEvent) => (e.key === 'Escape') && onClose())
mhContentElement?.addEventListener('click', (e: MouseEvent) => e.stopPropagation())



const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')

EmblaCarousel(viewportNode, OPTIONS)

import ModalHelper from './ModalHelper';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'
import projects from "../public/data/projects.json"

const buttonsModal = document.querySelectorAll('.button-modal');
const emblaContainer = document.querySelector('.embla__container');
const modalHeading = document.querySelector('.modal-heading h1');
const modalLinks = document.querySelectorAll('.modal-heading .links button');
const fullDescriptionElement = document.querySelector('.full-description');
const demoElement = document.querySelector('.modal-helper .demo');
const modalLogo = document.querySelector('.modal-helper .modal-logo');
const mhElement:        HTMLElement | null = document.querySelector('.modal-helper');
const mhContentElement: HTMLElement | null = document.querySelector('.modal-helper-content-block');
const mhButtonClose:    HTMLElement | null = document.querySelector('.modal-helper-content-block .button-close');
let toLink: (() => void) | null = null;
let toGitHub: (() => void) | null = null;

buttonsModal.forEach((but, index) => {
  but.addEventListener('click', () => {
    const mh = new ModalHelper(mhElement);
    emblaContainer!.innerHTML = projects[index].images!.map(image => `<div class="embla__slide"><img src="${image}" alt="" /></div>`).join('')
    modalHeading!.innerHTML = projects[index].title
    fullDescriptionElement!.innerHTML = projects[index].fullDescription
    demoElement!.innerHTML = `Демо: <a href='${projects[index].link}' target='_blank'>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A9B1D6"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
    ${projects[index].title}
    </a>`

    toLink = () => window.open(projects[index].link, '_blank')
    toGitHub = () => window.open(projects[index].link, '_blank')

    
    modalLinks[0].addEventListener('click', toLink)
    modalLinks[1].addEventListener('click', toGitHub)

    modalLogo!.setAttribute('src', projects[index].logo)
    mh.show('bottom', true)
  })
})

const onClose = () => {
  const mh = new ModalHelper(mhElement)
  mh.hide("bottom")
  if(toLink && toGitHub) {
    modalLinks[0].removeEventListener('click', toLink)
    modalLinks[1].removeEventListener('click', toGitHub)
  }
}


mhElement?.addEventListener('click', onClose)
mhButtonClose?.addEventListener('click', onClose)
document.addEventListener('keydown', (e: KeyboardEvent) => (e.key === 'Escape') && onClose())
mhContentElement?.addEventListener('click', (e: MouseEvent) => e.stopPropagation())



const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')

EmblaCarousel(viewportNode, OPTIONS)
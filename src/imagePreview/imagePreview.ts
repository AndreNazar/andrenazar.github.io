let previewEl: HTMLElement | null = null

function createPreview() {
  previewEl = document.createElement('div')
  previewEl.className = 'image-preview'

  previewEl.innerHTML = `
    <div class="image-preview__backdrop"></div>
    <img class="image-preview__img" src="" />
  `

  document.body.appendChild(previewEl)

  previewEl.addEventListener('click', () => closePreview())
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePreview()
  })
}

export function openPreview(src: string) {
  if (!previewEl) createPreview()

  const img = previewEl!.querySelector('img')!
  img.src = src

  previewEl!.classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closePreview() {
  if (!previewEl) return
  previewEl.classList.remove('open')
  document.body.style.overflow = ''
}
import './style.scss'

const myProjects = [
    {
        title: 'CoLimg',
        description: 'Сюда можно загрузить картинку и получить акцентные цвета.',
        image: './assets/projects/colimg.png',
        link: 'https://andrenazar.github.io/coLimg/',
        github: 'https://github.com/AndreNazar/coLimg',
        langs: ["HTML", "CSS", "TypeScript", "SCSS", "Webpack"],
    },
    {
        title: 'Магазин цветов',
        description: 'Интернет-магазин встроенный в Telegram.',
        image: './assets/projects/dff.png',
        link: 'https://imgur.com/a/wGBj92R',
        github: '',
        langs: ["React", "Redux", "JavaScript", "SCSS", "Create React App"],
    },
    {
        title: 'Манамайнер',
        description: 'Игра по накоплению маны.',
        image: './assets/projects/manamainer.png',
        link: 'https://andrenazar.github.io/manaminer/',
        github: 'https://github.com/AndreNazar/manaminer',
        langs: ["React", "Redux", "TypeScript", "SCSS", "Vite"],
    },
    {
        title: 'RegExp Constructor',
        description: 'Конструктор RegExp выражений.',
        image: './assets/projects/reg.png',
        link: 'https://andrenazar.github.io/RegExpConstroctor/',
        github: 'https://github.com/AndreNazar/RegExpConstroctor',
        langs: ["React", "Redux", "TypeScript", "SCSS", "Create React App"],
    },
    {
        title: 'FastLogo',
        description: 'Здесь можно сгенерировать ультра-уникальный логотип.',
        image: './assets/projects/fast-logo.png',
        link: 'https://andrenazar.github.io/fast-logo/',
        github: 'https://github.com/AndreNazar/fast-logo',
        langs: ["React", "TypeScript", "SCSS", "Vite"]
    },
    {
        title: 'Loader&Charts',
        description: 'Это было тестовое задание из Хабр.Карьера.',
        image: './assets/projects/loaders.png',
        link: 'https://andrenazar.github.io/loader-and-charts/',
        github: 'https://github.com/AndreNazar/loader-and-charts',
        langs: ["Vue", "TypeScript", "SCSS", "Vite"]
    },
]

const projectsListComponent = document.querySelector('.projects-list')

projectsListComponent!.innerHTML = myProjects.map(project => `
          <div class="project-item">
            <div class="logo-block">
              <img src="${project.image}" alt="" />
            </div>
            <div class="project-info">
              <h3>
                ${project.title}
                <div class="links">
                    <a href="${project.link}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" viewBox="0 -960 960 960" fill="#A9B1D6"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                    </a>
                    ${project.github !== "" ? `<a href="${project.github}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" viewBox="0 0 191.51 186.79" fill="#A9B1D6"><path d="M95.76,0A95.76,95.76,0,0,0,65.48,186.61c4.79.89,6.55-2.07,6.55-4.6,0-2.29-.09-9.83-.13-17.83-26.64,5.79-32.26-11.3-32.26-11.3-4.36-11.06-10.64-14-10.64-14-8.69-5.94.65-5.82.65-5.82,9.62.68,14.68,9.87,14.68,9.87,8.55,14.64,22.41,10.4,27.87,8,.86-6.19,3.33-10.42,6.08-12.81C57,135.65,34.65,127.44,34.65,90.75A37.06,37.06,0,0,1,44.52,65c-1-2.4-4.27-12.14.93-25.33,0,0,8-2.57,26.34,9.82a90.63,90.63,0,0,1,48,0c18.28-12.39,26.3-9.82,26.3-9.82,5.22,13.19,1.94,22.94.94,25.34a37,37,0,0,1,9.85,25.7c0,36.78-22.4,44.88-43.72,47.25,3.43,3,6.5,8.8,6.5,17.74,0,12.81-.11,23.12-.11,26.27,0,2.55,1.72,5.54,6.57,4.6A95.77,95.77,0,0,0,95.76,0"/></svg>
                    </a>` : ""}
                </div>
              </h3>
              <p>${project.description}</p>
              <ul class="langs-list">
                ${project.langs.map(lang => `<li class="lang-item">${lang}</li>`).join('')}
              </ul>
            </div>
          </div>`).join('')
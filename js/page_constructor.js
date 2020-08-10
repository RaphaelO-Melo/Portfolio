//! Script responsável por construir a página

function createHeaderLinks(){
    const REFERENCES_TXT = ['Sobre', 'Projetos', 'Contato'];
    const REFERENCES_LINKS = ['#about-section', '#projects-section', '#contact-section'];

    for(let cont = 0; cont < REFERENCES_TXT.length; cont++){
        
       document.getElementById('ul_navbar').innerHTML += 
       `
        <li class="nav-item">
            <a class="nav-link" href="${REFERENCES_LINKS[cont]}">
                <img class="egg-link d-md-none d-lg-none d-xl-none" src="./assets/images/icons/egg.png" alt="Egg Icon">
                ${REFERENCES_TXT[cont]}
            </a>
        </li>
       `;
    }
}


function createSkillsLvl(){
    const REFERENCES_SKILL_NAMES = ['HTML5', 'CSS3', 'JAVASCRIPT (ES6)', 'BOOTSTRAP 4', 'PHP 7', 'MySQL'];
    const REFERENCES_SKILL_LEVELS = [4, 3, 3, 3, 2, 2];
    let resp_string = '';

    for(cont = 0; cont < REFERENCES_SKILL_NAMES.length; cont++){
        resp_string += 
        `<div class="col-10 ml-auto mr-auto skill-area clearfix pb-3">
            <h6>${REFERENCES_SKILL_NAMES[cont]}</h6>
        `;
        for(cont_2 = 0; cont_2 < 5; cont_2++){
            if(cont_2 < REFERENCES_SKILL_LEVELS[cont]){
                resp_string += `<div class="float-left skill-lvl-full"></div>`
            } else {
                resp_string += `<div class="float-left skill-lvl-empty"></div>`
            }
            
        }
        resp_string += `</div>`;
    }
    

    document.getElementById('skill-container').innerHTML += resp_string;
}

function createProjects(){
    let resp = '';
    const PROJECTS = 
    [
        {
            name: 'Notícias Cidade',
            institution: 'Udemy',
            link: 'https://raphaelo-melo.github.io/Site_Noticias-Cidade/',
            image_link: './assets/images/noticias-cidade.PNG',
            alt: 'Print Notícias Cidade',
            description: `Este projeto foi desenvolvido usando apenas <span class="custom-txt">HTML</span> e <span class="custom-txt">CSS</span> puro. O objetivo foi exercitar conhecimentos básicos das
            tecnologias que são os pilares para o desenvolvimento web, para isso foi montado um portal de notícias fictício Um projeto desafiador e muito importante por ser onde
            identifiquei minhas dificuldades iniciais com as duas linguagens.`
        },

        {
            name: 'Finans',
            institution: 'Udemy',
            link: 'https://raphaelo-melo.github.io/Site_Finans/',
            image_link: './assets/images/finans.PNG',
            alt: 'Print Finans',
            description: `Este projeto foi o meu primeiro desenvolvido usando <span class="custom-txt">Bootstrap 4</span>. O objetivo foi estudar o uso do framework e, para isso,
            foi montada uma homepage de um aplicativo de financas pessoais fictício. Foi um projeto importante pois nele foi possível compreender as facilidades e a agilidade que o
            framework trazia para o desenvolvimento.`
        },

        {
            name: 'Calculadora',
            institution: 'Udemy',
            link: 'https://raphaelo-melo.github.io/APP_Calculadora/',
            image_link: './assets/images/calculadora.PNG',
            alt: 'Print Calculadora',
            description: `Esta aplicação foi desenvolvida com conhecimentos intermediários de <span class="custom-txt">JavaScript</span>. O objetivo foi exercitar lógica de programação e, para isso,
            foi desenvolvida uma calculadora funcional. Foi um projeto desafiador de ser desenvolvido, onde também usei conhecimentos de <span class="custom-txt">Bootstrap 4</span> para deixar
            a aplicação visualmente mais agradável.`
        },

        {
            name: 'Jogo Mata Mosquito',
            institution: 'Udemy',
            link: 'https://raphaelo-melo.github.io/APP_Game-mata-mosquito/',
            image_link: './assets/images/mata-mosquito.PNG',
            alt: 'Print Jogo Mata Mosquito',
            description: `Um jogo desenvolvido usando conhecimentos básicos de <span class="custom-txt">JavaScript</span>. Nele o jogador tem que matar mosquitos com o clique do mouse
            antes que eles sumam e ele perca uma vida, o jogo possui 3 dificuldades e foi desenvolvido com o propósito de exercitar a codificação com a linguagem.`
        },

        {
            name: 'Despesas pessoais',
            institution: 'Udemy',
            link: 'https://raphaelo-melo.github.io/APP_Orcamento-pessoal/',
            image_link: './assets/images/despesas-pessoais.PNG',
            alt: 'Print Orçamento pessoal',
            description: `Uma aplicação desenvolvida usando conhecimentos intermediários de <span class="custom-txt">JavaScript</span>, nela o usuário pode cadastrar e consultar suas despesas pessoais. 
            O objetivo foi usar conhecimentos mais avançados da linguagem para começar a manipular estados e dados da aplicação, que nesse projeto, são armazenados no <span class="custom-txt">Local Storage </span>
            do navegador.`
        },

        {
            name: 'Into the Dwarfness',
            institution: 'Centro Universitário SENAC',
            link: 'https://github.com/Waffliors/Into-The-Dwarfness',
            image_link: './assets/images/into-the-dwarfnes.PNG',
            alt: 'Print Into the Dwarfness',
            description: `Um jogo desenvolvido em <span class="custom-txt">Java</span> durante a graduação em jogos digitais. Nele o jogador controla um anão que tenta provar seu valor
            através da exploração dentro de uma masmorra cheia de inimigos medonhos e rápidos. O principal objetivo desse projeto foi colocar em prática o conhecimento sobre
            <span class="custom-txt">Programação Orientada a Objetos</span>, foi um projeto fundamental para a solidificação do conhecimento sobre esse paradigma de programação.`
        },

        {
            name: 'Quests of Wisllow',
            institution: 'Centro Universitário SENAC',
            link: 'https://play.google.com/store/apps/details?id=com.Bugnatron.QuestsofWisllow',
            image_link: './assets/images/quests-of-wisllow.PNG',
            alt: 'Print Quests of Wisllow',
            description: `Projeto de conclusão de curso da graduação em <span class="custom-txt">Jogos Digitais</span>. O jogo foi desenvolvido usando <span class="custom-txt">C#</span> na <span class="custom-txt">Unity</span>
            e tinha como objetivo agregar os conhecimentos adquiridos na graduação e executar um projeto da fase inicial até sua publicação e distribuição. Importante devido ao fato de ser uma
            experiência próxima a realidade do desenvolvimento de um jogo profissional.`
        }
    ]


    for(let cont = 0; cont < PROJECTS.length; cont++){
        if(cont % 2 == 0){
            resp += 
            `
            <!-- ↓ Project 0${cont + 1} Start ↓ -->
            <div class="container mt-5 pt-5">
                <div class="row">
                    <div class="col-12 col-lg-6 order-2 order-lg-1 order-xl-1 p-3 text-center img-project-div">
                        <a href="${PROJECTS[cont].link}" target="_blank">
                            <img class="project-img img-fluid" src="${PROJECTS[cont].image_link}" alt="${PROJECTS[cont].alt}">
                        </a>
                    </div>
            
                    <div class="col-12 col-lg-6 order-1 order-lg-2 order-xl-2 p-3 pt-4 text-center">
                        <a href="${PROJECTS[cont].link}" target="_blank"><h6 class="project-title">${PROJECTS[cont].name}</h6></a>
                        <h6 class="project-institution">${PROJECTS[cont].institution}</h6>
                        <p class="project-text">
                             ${PROJECTS[cont].description}
                        </p>
                    </div>
                </div>
            </div>
            <!-- ↑ Project 0${cont + 1} End ↑ -->
            `
        } else {
            resp += 
            `
            <!-- ↓ Project 0${cont + 1} Start ↓ -->
            <div class="container mt-5 pt-5">
                <div class="row">
                    <div class="col-12 col-lg-6 p-3 pt-4 text-center">
                        <a href="${PROJECTS[cont].link}" target="_blank"><h6 class="project-title">${PROJECTS[cont].name}</h6></a>
                        <h6 class="project-institution">${PROJECTS[cont].institution}</h6>
                        <p class="project-text">
                            ${PROJECTS[cont].description}
                        </p>
                    </div>
        
                    <div class="col-12 col-lg-6 p-3">
                        <a href="${PROJECTS[cont].link}" target="_blank">
                            <img class="project-img img-fluid" src="${PROJECTS[cont].image_link}" alt="${PROJECTS[cont].alt}">
                        </a>
                    </div>
                </div>
            </div>
            <!-- ↑ Project 0${cont + 1} End ↑ -->
            `
        }
    }
    document.getElementById('projects-div').innerHTML = resp;
}



//Criação dos elementos
createHeaderLinks();
createSkillsLvl();
createProjects();
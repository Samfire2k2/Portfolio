import './style.css'
import impresarioImage from '../impresario.png'
import queryImage from '../querybot.png'
import lightCycleImage from '../lightcyclegame.png'
import covoitImage from '../covoit.png'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Retour en haut">SR<span>_</span></a>
    <nav class="nav" aria-label="Navigation terminale"></nav>
    <span class="status-pill"><i></i> disponible</span>
  </header>
  <main id="top">
    <section class="hero section-wrap"><div class="hero-copy"><p class="eyebrow"><span>01</span> terminal session / candidat full stack</p><h1>Je construis<br /><em>des produits utiles.</em></h1><p class="hero-text">Je m’appelle Samuel Ravard. Je développe des applications qui donnent une forme concrète aux idées : une interface claire, une donnée bien traitée, un système qui tient dans le temps. Mon parcours va des lettres aux architectures logicielles, avec la même curiosité pour les mots, les usages et les mécanismes.</p><div class="hero-actions"><a class="button button-primary" href="#work">Voir ce que je construis <span>↘</span></a><a class="button button-ghost" href="mailto:samuelravard@gmail.com">Parler d’une mission <span>↗</span></a><button class="button button-game" id="open-game" type="button">Light cycle <span>↯</span></button></div></div><div class="terminal-card" aria-label="Terminal de presentation"><div class="terminal-top"><span class="terminal-dots"><b></b><b></b><b></b></span><span>samuel@portfolio:~</span><span>•••</span></div><div class="terminal-body"><p><span class="green">➜</span> <span class="blue">~</span> whoami</p><p class="terminal-result">Samuel Ravard / full_stack_developer</p><p><span class="green">➜</span> <span class="blue">~</span> cat value.txt</p><p class="terminal-result">build_clean / learn_fast / ship_useful<span class="cursor"></span></p><p><span class="green">➜</span> <span class="blue">~</span> ls links/</p><p class="terminal-result">github/ &nbsp; writing/ &nbsp; projects/</p><p><span class="green">➜</span> <span class="blue">~</span> <span class="cursor-line">_</span></p></div><div class="code-orbit orbit-one">&lt;/&gt;</div><div class="code-orbit orbit-two">{ }</div></div></section>
    <div class="ticker" aria-label="Technologies utilisees"><span>JavaScript</span><span>Python</span><span>Vue.js</span><span>Django</span><span>ABAP</span><span>SAP BTP</span><span>Data</span><span>APIs</span></div><section class="impact-strip section-wrap"><div><b>01</b><span>Construire</span><small>des applications utiles</small></div><div><b>02</b><span>Connecter</span><small>front, back et données</small></div><div><b>03</b><span>Comprendre</span><small>le besoin métier</small></div><div><b>04</b><span>Progresser</span><small>avec méthode et curiosité</small></div></section>
    <section class="section-wrap content-section" id="work"><div class="section-heading"><div><p class="eyebrow"><span>02</span> selection / projets</p><h2>Des problemes, du code<span class="accent">.</span></h2></div><p class="section-note">Une selection de projets personnels et academiques, avec du produit, de l'IA et du systeme.</p></div><div class="project-grid"><article class="project-card featured"><div class="project-visual visual-green"><span class="visual-label">php + postgresql</span><div class="dashboard"><div class="dash-line long"></div><div class="dash-line"></div><div class="dash-bars"><i></i><i></i><i></i><i></i></div><div class="dash-row"><b></b><b></b><b></b></div></div></div><div class="project-meta"><div><span class="project-type">outil pour auteurs</span><h3>Impresario</h3></div><a class="arrow" href="https://github.com/Samfire2k2/Impresario" target="_blank" rel="noreferrer" aria-label="Voir Impresario sur GitHub">↗</a></div><p class="project-description"><strong>Le besoin :</strong> donner aux auteurs un espace pour planifier des histoires complexes. <strong>La solution :</strong> une application web avec intrigues paralleles, personnages, scenes, notes, drag-and-drop et historique des versions. <strong>Ce que cela montre :</strong> conception de modele de donnees, authentification et interface metier complete.</p><div class="tags"><span>PHP 8</span><span>PostgreSQL</span><span>REST API</span><span>Drag & drop</span></div></article><article class="project-card"><div class="project-visual visual-blue"><span class="visual-label">node + mistral</span><div class="data-lines"><b>01 <i></i></b><b>02 <i></i></b><b>03 <i></i></b><b>04 <i></i></b><b>05 <i></i></b></div></div><div class="project-meta"><div><span class="project-type">bot discord IA</span><h3>Query</h3></div><a class="arrow" href="https://github.com/Samfire2k2/Query" target="_blank" rel="noreferrer" aria-label="Voir Query sur GitHub">↗</a></div><p class="project-description"><strong>Le besoin :</strong> retrouver rapidement l'essentiel d'une conversation Discord. <strong>La solution :</strong> un bot Node.js qui filtre les messages, lance des syntheses Mistral via Hugging Face et expose des commandes par utilisateur, periode ou mot-cle. <strong>Ce que cela montre :</strong> integration IA, APIs externes, limites de volume et deploiement.</p><div class="tags"><span>Node.js</span><span>Mistral</span><span>Hugging Face</span></div></article><article class="project-card"><div class="project-visual visual-orange"><span class="visual-label">c / client-serveur</span><div class="network-map"><i></i><i></i><i></i><b></b></div></div><div class="project-meta"><div><span class="project-type">jeu multijoueur</span><h3>Light Cycle</h3></div><a class="arrow" href="https://github.com/Samfire2k2/Light-Cycle-Game" target="_blank" rel="noreferrer" aria-label="Voir Light Cycle sur GitHub">↗</a></div><p class="project-description"><strong>Le besoin :</strong> synchroniser plusieurs joueurs sur une meme grille. <strong>La solution :</strong> un serveur C qui conserve la position et la trace de chaque joueur, recoit les mouvements et verifie les collisions a chaque tour. <strong>Ce que cela montre :</strong> programmation systeme, reseau, concurrence et logique temps reel.</p><div class="tags"><span>C</span><span>Threads</span><span>Reseau</span></div></article><article class="project-card"><div class="project-visual visual-deep"><span class="visual-label">symfony + php</span><div class="route-map"><b></b><i></i><b></b><i></i><b></b></div></div><div class="project-meta"><div><span class="project-type">application web</span><h3>Covoiturage</h3></div><a class="arrow" href="https://github.com/Samfire2k2/dev-web" target="_blank" rel="noreferrer" aria-label="Voir le projet covoiturage sur GitHub">↗</a></div><p class="project-description"><strong>Le besoin :</strong> organiser les trajets et les utilisateurs d'une plateforme de covoiturage. <strong>La solution :</strong> une application Symfony structuree avec PHP, Twig, migrations, tests et separation claire des couches. <strong>Ce que cela montre :</strong> developpement web MVC, travail en equipe et comprehension d'un projet applicatif complet.</p><div class="tags"><span>Symfony</span><span>PHP</span><span>Twig</span></div></article></div></section>
    <section class="section-wrap content-section split-section" id="path"><div class="section-heading"><div><p class="eyebrow"><span>03</span> parcours / experience</p><h2>Apprendre en <em>faisant</em><span class="accent">.</span></h2></div></div><div class="timeline"><div class="timeline-item current"><span class="timeline-year">2024 — 2026</span><div><h3>delaware <small>alternance</small></h3><p>Developpement et maintenance d'applications ERP en ABAP. Conception d'evolutions metier, SAP BTP, interfaces SAPUI5/Fiori, tests et deploiements en methode Agile.</p></div></div><div class="timeline-item"><span class="timeline-year">2023 — 2024</span><div><h3>Impro Solutions <small>CDD / alternance</small></h3><p>Application collaborative en Vue.js et Django, traitement JSON en WLangage et automatisation d'extractions de donnees en Python.</p></div></div><div class="timeline-item"><span class="timeline-year">2021 — 2022</span><div><h3>Operis / Lycee Notre Dame <small>stages</small></h3><p>Scripting PHP et PowerShell, supervision d'infrastructures, inventaire, hyperviseurs et mise en place d'un outil de ticketing.</p></div></div></div></section>
    <section class="section-wrap content-section stack-section" id="stack"><div class="section-heading"><div><p class="eyebrow"><span>04</span> toolbox / stack</p><h2>Mon terrain de jeu<span class="accent">.</span></h2></div><p class="section-note">Une stack polyvalente pour passer de l'idee au produit.</p></div><div class="stack-grid"><div class="stack-column"><span class="stack-index">01</span><h3>Front-end</h3><p>JavaScript, TypeScript, React, Next.js, Vue.js, HTML5/CSS3, SAPUI5/Fiori</p></div><div class="stack-column"><span class="stack-index">02</span><h3>Back-end & data</h3><p>Python, Django, Flask, Java, PHP, Symfony, ABAP, APIs REST & GraphQL</p></div><div class="stack-column"><span class="stack-index">03</span><h3>Ops & architecture</h3><p>Docker, Kubernetes, CI/CD, Git, Linux, Cloud, Microservices, Clean Architecture</p></div><div class="stack-column"><span class="stack-index">04</span><h3>Methodes</h3><p>TDD, DevSecOps, UML, Merise, Scrum, Kanban, supervision et cybersecurite</p></div></div></section>
    <section class="contact-section" id="contact"><div class="section-wrap contact-inner"><p class="eyebrow"><span>05</span> contact / open to work</p><h2>Un projet en tete ?<br /><em>Parlons-en.</em></h2><a class="contact-link" href="mailto:samuelravard@gmail.com">samuelravard@gmail.com <span>↗</span></a><div class="contact-foot"><span>Nantes / Vertou — France</span><span>© 2026 Samuel Ravard</span><span class="contact-links"><a href="https://github.com/Samfire2k2" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://samfire2k2.github.io/end-of-line/" target="_blank" rel="noreferrer">Recueil ↗</a><a href="https://linkedin.com/in/samuel-ravard/" target="_blank" rel="noreferrer">LinkedIn ↗</a></span></div></div></section>
  </main>
  <div class="game-overlay" id="game-overlay" aria-hidden="true"><div class="game-shell" role="dialog" aria-modal="true" aria-labelledby="game-title"><div class="game-header"><div><p class="eyebrow"><span>99</span> arcade / hidden module</p><h2 id="game-title">Light cycle<span class="accent">.</span></h2></div><button class="game-close" id="close-game" type="button" aria-label="Fermer le jeu">×</button></div><div class="game-score"><span>score <b id="game-score">000</b></span><span id="game-status">press start to ride</span><span id="ai-mode">ai: standby</span><span>best <b id="game-best">000</b></span></div><canvas id="game-canvas" width="720" height="420" aria-label="Jeu Light Cycle"></canvas><div class="game-controls"><button id="start-game" class="button button-primary" type="button">Start / restart <span>↯</span></button><div class="d-pad" aria-label="Controles tactiles"><button data-direction="up" type="button">↑</button><div><button data-direction="left" type="button">←</button><button data-direction="down" type="button">↓</button><button data-direction="right" type="button">→</button></div></div><p>fleches ou WASD pour tourner</p></div></div></div>
`

document.body.insertAdjacentHTML('beforeend', `<aside class="music-player" aria-label="Lecteur musical"><div class="music-player-bar"><span><i></i> audio_module / mp3</span><button type="button" aria-label="Réduire le lecteur">−</button></div><div class="music-player-main"><div class="music-track"><span class="music-eq">▮▮▮</span><div><strong>portfolio_session.mp3</strong><small id="music-status">ready / add public/music.mp3</small></div></div><button class="music-play" id="music-play" type="button" aria-label="Lire la musique">▶</button></div><audio id="portfolio-audio" preload="metadata" src="${import.meta.env.BASE_URL}music.mp3"></audio></aside>`)
const musicPlayer = document.querySelector('.music-player')
musicPlayer.querySelector('button').addEventListener('click', () => musicPlayer.classList.toggle('is-collapsed'))
const portfolioAudio = document.querySelector('#portfolio-audio')
const musicPlay = document.querySelector('#music-play')
const musicStatus = document.querySelector('#music-status')
musicPlay.addEventListener('click', () => { if (portfolioAudio.paused) portfolioAudio.play().catch(() => { musicStatus.textContent = 'click to unlock audio' }) ; else portfolioAudio.pause() })
portfolioAudio.addEventListener('play', () => { musicPlay.textContent = 'Ⅱ'; musicStatus.textContent = 'playing / local mp3' })
portfolioAudio.addEventListener('pause', () => { musicPlay.textContent = '▶'; if (!portfolioAudio.currentTime) musicStatus.textContent = 'ready / add public/music.mp3' })
portfolioAudio.addEventListener('loadedmetadata', () => { musicStatus.textContent = 'ready / local mp3' })
portfolioAudio.addEventListener('error', () => { musicStatus.textContent = 'waiting / public/music.mp3' })
portfolioAudio.autoplay = true
portfolioAudio.play().catch(() => { musicStatus.textContent = 'click to start / autoplay blocked' })

const projectVisuals = [
  { image: impresarioImage, label: 'capture / impresario', alt: 'Interface de planification narrative Impresario' },
  { image: queryImage, label: 'capture / query', alt: 'Interface du bot Discord Query' },
  { image: lightCycleImage, label: 'concept / light cycle', alt: 'Deux cycles lumineux cyan et orange sur une grille' },
  { image: covoitImage, label: 'concept / covoiturage', alt: 'Interface de recherche de trajets de covoiturage' },
]
document.querySelectorAll('.project-card .project-visual').forEach((visual, index) => {
  const project = projectVisuals[index]
  visual.innerHTML = `<img class="project-image" src="${project.image}" alt="${project.alt}" loading="lazy" /><span class="visual-label">${project.label}</span>`
})

const projectDetails = [
  { id: 'impresario', title: 'Impresario', type: 'outil pour auteurs', tech: ['PHP', 'PostgreSQL', 'JavaScript'], summary: 'Un espace de travail complet pour organiser des histoires à intrigues parallèles.', details: 'Conception d’un modèle de données pour les projets, intrigues, scènes, personnages, tags et dépendances. Le projet combine authentification, API CRUD, drag-and-drop, statistiques d’écriture et historique de versions.', github: 'https://github.com/Samfire2k2/Impresario' },
  { id: 'query', title: 'Query', type: 'bot Discord IA', tech: ['Node.js', 'IA', 'API'], summary: 'Un bot qui transforme des conversations Discord en synthèses directement exploitables.', details: 'Intégration de l’API Hugging Face avec Mistral, commandes par utilisateur et période, recherche par mot-clé, statistiques de canal, limitation du volume et gestion des variables d’environnement.', github: 'https://github.com/Samfire2k2/Query' },
  { id: 'light-cycle', title: 'Light Cycle', type: 'jeu multijoueur', tech: ['C', 'Réseau', 'Threads'], summary: 'Un jeu client-serveur basé sur une grille partagée et des collisions en temps réel.', details: 'Le serveur conserve la position et la trace de chaque joueur, reçoit les déplacements et vérifie les collisions à chaque tour. Le projet explore la concurrence, la synchronisation et les échanges réseau.', github: 'https://github.com/Samfire2k2/Light-Cycle-Game' },
  { id: 'covoiturage', title: 'Covoiturage', type: 'application web', tech: ['Symfony', 'PHP', 'Twig'], summary: 'Une application structurée pour organiser des trajets et des utilisateurs.', details: 'Projet Symfony avec séparation MVC, templates Twig, migrations, configuration d’environnement et organisation d’une application métier réalisée dans un contexte collaboratif.', github: 'https://github.com/Samfire2k2/dev-web' },
]

const workSection = document.querySelector('#work')
workSection.querySelector('.section-heading').insertAdjacentHTML('afterend', `<div class="project-toolbar"><span class="toolbar-label">filter / stack</span><div class="project-filters"><button class="filter-button is-active" data-filter="all" type="button">all</button><button class="filter-button" data-filter="IA" type="button">IA</button><button class="filter-button" data-filter="PHP" type="button">PHP</button><button class="filter-button" data-filter="C" type="button">C / réseau</button><button class="filter-button" data-filter="Node.js" type="button">Node.js</button></div></div>`)
workSection.querySelectorAll('.project-card').forEach((card, index) => {
  const project = projectDetails[index]
  card.dataset.project = project.id
  card.dataset.tech = project.tech.join(',')
  card.querySelector('.project-meta').insertAdjacentHTML('beforeend', `<button class="case-study-button" type="button" data-project-detail="${project.id}">case study ↗</button>`)
})
workSection.querySelector('[data-project="light-cycle"] .project-meta').insertAdjacentHTML('beforeend', '<button class="case-study-button open-game-trigger" type="button">play in browser ↯</button>')

const statsMarkup = `<section class="section-wrap content-section stats-section" id="github-stats"><div class="section-heading"><div><p class="eyebrow"><span>03</span> github / activity snapshot</p><h2>Du code <em>public</em><span class="accent">.</span></h2></div><a class="section-note section-link" href="https://github.com/Samfire2k2" target="_blank" rel="noreferrer">ouvrir le profil ↗</a></div><div class="stats-grid"><div class="stat-card"><strong>21</strong><span>repositories publics</span></div><div class="stat-card"><strong>72</strong><span>contributions / an</span></div><div class="stat-card"><strong>8</strong><span>followers</span></div><div class="stat-card"><strong>10+</strong><span>projets personnels</span></div></div><div class="language-strip"><span>languages /</span><b>JavaScript</b><b>PHP</b><b>Python</b><b>C</b><b>Java</b><b>HTML / CSS</b></div></section>`
document.querySelector('#stack').insertAdjacentHTML('beforebegin', statsMarkup)
document.querySelector('#github-stats .language-strip').insertAdjacentHTML('afterend', '<div class="language-chart" aria-label="Graphique des langages utilisés"><div class="language-chart-heading"><span>language map / pratique</span><small>focus technique</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-js"></i>JavaScript</span><i class="language-bar"><b class="bar-js"></b></i><small>front / tooling</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-python"></i>Python</span><i class="language-bar"><b class="bar-python"></b></i><small>data / IA / back</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-php"></i>PHP</span><i class="language-bar"><b class="bar-php"></b></i><small>web / Symfony</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-c"></i>C</span><i class="language-bar"><b class="bar-c"></b></i><small>système / réseau</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-java"></i>Java</span><i class="language-bar"><b class="bar-java"></b></i><small>MIAGE / objet</small></div><div class="language-row"><span class="language-name"><i class="language-dot dot-abap"></i>ABAP</span><i class="language-bar"><b class="bar-abap"></b></i><small>ERP / SAP</small></div></div>')
const skillLevels = [
  { label: 'pratique régulière', value: '70%' },
  { label: 'pratique régulière', value: '75%' },
  { label: 'solide expérience', value: '65%' },
  { label: 'méthodes appliquées', value: '70%' },
]
document.querySelectorAll('.stack-column').forEach((column, index) => {
  const level = skillLevels[index]
  column.insertAdjacentHTML('beforeend', `<div class="skill-level"><span>${level.label}</span><i><b style="width: ${level.value}"></b></i></div>`)
})

const creativeMarkup = `<section class="section-wrap content-section creative-section" id="creative"><div class="creative-panel"><div><p class="eyebrow"><span>06</span> creative side / writing</p><h2>Je code des systèmes.<br /><em>J’écris des mondes.</em></h2><p>En parallèle du développement, je construis des espaces pour les textes, les fragments et les idées. Cette double pratique nourrit mon attention au détail, au rythme et à l’expérience utilisateur.</p></div><div class="creative-actions"><a class="button button-primary" href="/writing.html">Entrer dans writing/ <span>↗</span></a><a class="button button-ghost" href="https://samfire2k2.github.io/end-of-line/" target="_blank" rel="noreferrer">Ouvrir End of Line <span>↗</span></a></div></div></section>`
document.querySelector('#contact').insertAdjacentHTML('beforebegin', creativeMarkup)
document.querySelector('.creative-actions a').href = `${import.meta.env.BASE_URL}writing.html`
document.querySelector('.creative-actions').insertAdjacentHTML('beforeend', '<a class="button button-ghost" href="https://avely.me/samfire" target="_blank" rel="noreferrer">Explorer mon univers ↗</a>')
document.querySelector('.contact-links').insertAdjacentHTML('beforeend', '<a href="https://avely.me/samfire" target="_blank" rel="noreferrer">Avely ↗</a>')

document.querySelector('.status-pill').innerHTML = '<i></i> alternance 2026'
document.querySelector('.hero-copy').insertAdjacentHTML('beforeend', '<div class="availability-callout"><span class="availability-dot"></span><div><strong>Je recherche une alternance</strong><small>Développement Full Stack · Nantes et alentours · Mastère 1 Expert Développement Full Stack — Ynov</small></div></div>')
document.querySelector('.hero-actions').insertAdjacentHTML('beforeend', '<a class="button button-social" href="https://linkedin.com/in/samuel-ravard/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a class="button button-social" href="https://github.com/Samfire2k2" target="_blank" rel="noreferrer">GitHub ↗</a>')
document.querySelector('.terminal-body').insertAdjacentHTML('beforeend', '<div class="git-log"><span>commit 9f3a2d1</span> feat: build useful things</div><div class="git-log"><span>commit 72c0de4</span> chore: keep learning</div>')
document.querySelector('.impact-strip').insertAdjacentHTML('afterend', '<section class="section-wrap preamble-section"><div class="preamble-kicker"><span>01 / preamble</span><i></i><span>letters → systems → products</span></div><div class="preamble-grid"><h2>Un parcours littéraire<br />pour penser des <em>systèmes clairs.</em></h2><div><p>Avant de concevoir des applications, j’ai appris à écouter les nuances. Le lycée littéraire et la philosophie m’ont donné le goût des mots, de la structure et des questions qui se cachent derrière chaque problème.</p><p>Le développement est venu comme une autre manière d’écrire : moins avec des phrases qu’avec des flux, des contraintes et des interfaces. Aujourd’hui, je cherche le point de rencontre entre l’exigence technique, le besoin métier et l’expérience de la personne qui utilisera le produit.</p><p class="preamble-signature">Samuel Ravard / développeur full stack / esprit créatif</p></div></div></section>')
document.querySelector('#path .timeline').innerHTML = `<div class="timeline-item current"><span class="timeline-year">2024 — 2026</span><div><h3>delaware <small>alternance · Nantes</small></h3><p>Développement et maintenance d’applications ERP en ABAP, conception de fonctionnalités et d’évolutions adaptées aux besoins métiers, extension et intégration de services cloud via SAP BTP, création d’interfaces SAPUI5 et Fiori, tests unitaires, débogage, déploiement et collaboration avec les équipes Agiles.</p></div></div><div class="timeline-item"><span class="timeline-year">2023 — 2024</span><div><h3>Impro Solutions <small>CDD / alternance · St-Herblain</small></h3><p>Développement d’une application de gestion de tâches collaboratives en Vue.js et Django, automatisation d’extractions de données en Python, traitements JSON en WLangage, formations aux frameworks Django et Vue.js, et démonstration d’un agenda électronique auprès de clients.</p></div></div><div class="timeline-item"><span class="timeline-year">2022</span><div><h3>Lycée Notre Dame <small>stage · Rezé</small></h3><p>Montée en version d’un hyperviseur, gestion de l’inventaire et des incidents, supervision des équipements et des serveurs, puis mise en place d’un outil de ticketing.</p></div></div><div class="timeline-item"><span class="timeline-year">2021</span><div><h3>Operis <small>stage · Orvault</small></h3><p>Mise en place d’une solution de remontée d’informations depuis des fichiers XML avec un script PHP, automatisation de la messagerie Office 365 en PowerShell, signatures templatisées et export de filtres depuis Zimbra.</p></div></div>`

const bootScreen = document.createElement('div')
bootScreen.className = 'boot-screen'
bootScreen.innerHTML = '<div class="boot-content"><span class="boot-mark">SR_</span><div class="boot-lines" id="boot-lines"></div><div class="boot-progress"><i></i></div><button type="button">skip boot ↵</button></div>'
document.body.appendChild(bootScreen)
const closeBoot = () => { bootScreen.classList.add('is-complete'); setTimeout(() => bootScreen.remove(), 650) }
bootScreen.querySelector('button').addEventListener('click', closeBoot)
const bootCommands = ['initializing portfolio_kernel', 'mounting projects/', 'loading github_profile', 'starting creative_mode', 'checking audio_module']
const runBootSequence = async () => { for (const command of bootCommands) { const line = document.createElement('p'); line.className = 'boot-command is-running'; line.innerHTML = `<span>➜ ${command}...</span><b>RUN</b>`; document.querySelector('#boot-lines').appendChild(line); await new Promise((resolve) => setTimeout(resolve, 150)); line.classList.remove('is-running'); line.classList.add('is-done'); line.querySelector('b').textContent = 'OK'; await new Promise((resolve) => setTimeout(resolve, 70)) } setTimeout(closeBoot, 220) }
runBootSequence()

const themeToggle = document.createElement('button')
themeToggle.className = 'theme-toggle'
themeToggle.type = 'button'
themeToggle.textContent = 'light_mode'
themeToggle.setAttribute('aria-label', 'Changer de thème')
document.querySelector('.site-header').appendChild(themeToggle)
if (localStorage.getItem('portfolio-theme') === 'light') document.body.classList.add('light-theme')
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); themeToggle.textContent = document.body.classList.contains('light-theme') ? 'dark_mode' : 'light_mode' })

const languageToggle = document.createElement('button')
languageToggle.className = 'language-toggle'
languageToggle.type = 'button'
languageToggle.setAttribute('aria-label', 'Changer de langue')
document.querySelector('.site-header').appendChild(languageToggle)
const languageContent = {
  fr: { nav: ['projets', 'parcours', 'stack', 'github ↗', 'contact'], status: 'alternance 2026', heroEyebrow: 'terminal session / candidat full stack', heroTitle: 'Je construis<br /><em>des produits utiles.</em>', heroText: 'Je m’appelle Samuel Ravard. Je développe des applications qui donnent une forme concrète aux idées : une interface claire, une donnée bien traitée, un système qui tient dans le temps. Mon parcours va des lettres aux architectures logicielles, avec la même curiosité pour les mots, les usages et les mécanismes.', projectsButton: 'Voir ce que je construis <span>↘</span>', contactButton: 'Parler d’une mission <span>↗</span>', projectEyebrow: 'selection / projets', projectTitle: 'Des problèmes, du code<span class="accent">.</span>', projectNote: 'Des projets où la technique répond à un usage : écrire, comprendre, relier, faire circuler.', pathEyebrow: 'parcours / expérience', pathTitle: 'Apprendre en <em>faisant</em><span class="accent">.</span>', stackEyebrow: 'toolbox / stack', stackTitle: 'Mon terrain de jeu<span class="accent">.</span>', contactEyebrow: 'contact / open to work', contactTitle: 'Un projet en tête ?<br /><em>Parlons-en.</em>' },
  en: { nav: ['projects', 'path', 'stack', 'github ↗', 'contact'], status: 'available 2026', heroEyebrow: 'terminal session / full stack developer', heroTitle: 'I build<br /><em>useful products.</em>', heroText: 'Samuel Ravard, full stack developer and work-study student. I connect interfaces, APIs, data and systems to turn business needs into concrete, maintainable solutions ready to evolve.', projectsButton: 'See what I build <span>↘</span>', contactButton: 'Talk about a role <span>↗</span>', projectEyebrow: 'selection / projects', projectTitle: 'Problems, solved in code<span class="accent">.</span>', projectNote: 'A selection of personal and academic projects across product, AI and systems.', pathEyebrow: 'path / experience', pathTitle: 'Learn by <em>building</em><span class="accent">.</span>', stackEyebrow: 'toolbox / stack', stackTitle: 'My playground<span class="accent">.</span>', contactEyebrow: 'contact / open to work', contactTitle: 'Have a project in mind?<br /><em>Let’s talk.</em>' },
}
const applyLanguage = (language) => {
  const copy = languageContent[language]
  document.querySelectorAll('.nav a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index] })
  document.querySelector('.status-pill').innerHTML = `<i></i> ${copy.status}`
  document.querySelector('.hero .eyebrow').innerHTML = `<span>01</span> ${copy.heroEyebrow}`
  document.querySelector('.hero h1').innerHTML = copy.heroTitle.replace('</em>', '<span class="hero-cursor" aria-hidden="true"></span></em>')
  document.querySelector('.hero-text').textContent = copy.heroText
  document.querySelector('.hero-actions a:first-child').innerHTML = copy.projectsButton
  document.querySelector('.hero-actions a:nth-child(2)').innerHTML = copy.contactButton
  const headings = document.querySelectorAll('.section-heading')
  headings[0].querySelector('.eyebrow').innerHTML = `<span>02</span> ${copy.projectEyebrow}`
  headings[0].querySelector('h2').innerHTML = copy.projectTitle
  headings[0].querySelector('.section-note').textContent = copy.projectNote
  const pathHeading = document.querySelector('#path .section-heading')
  pathHeading.querySelector('.eyebrow').innerHTML = `<span>03</span> ${copy.pathEyebrow}`
  pathHeading.querySelector('h2').innerHTML = copy.pathTitle
  const stackHeading = document.querySelector('#stack .section-heading')
  stackHeading.querySelector('.eyebrow').innerHTML = `<span>04</span> ${copy.stackEyebrow}`
  stackHeading.querySelector('h2').innerHTML = copy.stackTitle
  const contact = document.querySelector('#contact')
  contact.querySelector('.eyebrow').innerHTML = `<span>05</span> ${copy.contactEyebrow}`
  contact.querySelector('h2').innerHTML = copy.contactTitle
  const preamble = document.querySelector('.preamble-section')
  preamble.querySelector('.preamble-kicker span:last-child').textContent = language === 'en' ? 'letters → systems → products' : 'letters → systems → products'
  preamble.querySelector('h2').innerHTML = language === 'en' ? 'A literary path<br />for thinking in <em>clear systems.</em>' : 'Un parcours littéraire<br />pour penser des <em>systèmes clairs.</em>'
  const preambleParagraphs = preamble.querySelectorAll('p')
  preambleParagraphs[0].textContent = language === 'en' ? 'Before building applications, I learned to listen to nuance. Literature and philosophy taught me a taste for words, structure and the questions hidden behind every problem.' : 'Avant de concevoir des applications, j’ai appris à écouter les nuances. Le lycée littéraire et la philosophie m’ont donné le goût des mots, de la structure et des questions qui se cachent derrière chaque problème.'
  preambleParagraphs[1].textContent = language === 'en' ? 'Development became another way of writing: less with sentences than with flows, constraints and interfaces. Today, I look for the meeting point between technical rigor, business needs and the person who will use the product.' : 'Le développement est venu comme une autre manière d’écrire : moins avec des phrases qu’avec des flux, des contraintes et des interfaces. Aujourd’hui, je cherche le point de rencontre entre l’exigence technique, le besoin métier et l’expérience de la personne qui utilisera le produit.'
  preambleParagraphs[2].textContent = language === 'en' ? 'Samuel Ravard / full stack developer / creative mind' : 'Samuel Ravard / développeur full stack / esprit créatif'
  const availability = document.querySelector('.availability-callout')
  availability.querySelector('strong').textContent = language === 'en' ? 'Looking for a work-study position' : 'Je recherche une alternance'
  availability.querySelector('small').textContent = language === 'en' ? 'Full Stack Development · Nantes and nearby · Master 1 Expert Full Stack Development — Ynov' : 'Développement Full Stack · Nantes et alentours · Mastère 1 Expert Développement Full Stack — Ynov'
  const githubStats = document.querySelector('#github-stats')
  githubStats.querySelector('.eyebrow').innerHTML = `<span>03</span> ${language === 'en' ? 'github / activity snapshot' : 'github / activity snapshot'}`
  githubStats.querySelector('h2').innerHTML = language === 'en' ? 'Public <em>code</em><span class="accent">.</span>' : 'Du code <em>public</em><span class="accent">.</span>'
  githubStats.querySelector('.section-link').textContent = language === 'en' ? 'open profile ↗' : 'ouvrir le profil ↗'
  const statLabels = language === 'en' ? ['public repositories', 'contributions / year', 'followers', 'personal projects'] : ['repositories publics', 'contributions / an', 'followers', 'projets personnels']
  githubStats.querySelectorAll('.stat-card span').forEach((label, index) => { label.textContent = statLabels[index] })
  const projectCards = document.querySelectorAll('.project-card')
  const projectCopy = language === 'en' ? [
    ['writing tool', 'Impresario', '<strong>Need:</strong> give writers a workspace for complex stories. <strong>Solution:</strong> parallel plots, characters, scenes, notes, drag-and-drop and version history. <strong>Shows:</strong> data modelling, authentication and business UI.'],
    ['AI Discord bot', 'Query', '<strong>Need:</strong> quickly extract the useful parts of a Discord conversation. <strong>Solution:</strong> a Node.js bot with Mistral summaries through Hugging Face, filters and channel statistics. <strong>Shows:</strong> AI integration, external APIs and deployment.'],
    ['multiplayer game', 'Light Cycle', '<strong>Need:</strong> synchronize several players on one grid. <strong>Solution:</strong> a C server tracking positions, trails, moves and collisions every turn. <strong>Shows:</strong> systems programming, networking and concurrency.'],
    ['web application', 'Carpooling', '<strong>Need:</strong> organize users and trips on a carpool platform. <strong>Solution:</strong> a structured Symfony application with PHP, Twig, migrations and environment configuration. <strong>Shows:</strong> MVC development and teamwork.'],
  ] : [
    ['outil pour auteurs', 'Impresario', '<strong>Le besoin :</strong> donner aux auteurs un espace pour planifier des histoires complexes. <strong>La solution :</strong> intrigues paralleles, personnages, scenes, notes, drag-and-drop et historique des versions. <strong>Ce que cela montre :</strong> modele de donnees, authentification et interface metier.'],
    ['bot Discord IA', 'Query', '<strong>Le besoin :</strong> retrouver rapidement l’essentiel d’une conversation Discord. <strong>La solution :</strong> un bot Node.js avec syntheses Mistral via Hugging Face, filtres et statistiques de canal. <strong>Ce que cela montre :</strong> integration IA, APIs externes et deploiement.'],
    ['jeu multijoueur', 'Light Cycle', '<strong>Le besoin :</strong> synchroniser plusieurs joueurs sur une meme grille. <strong>La solution :</strong> un serveur C qui gere positions, traces, mouvements et collisions a chaque tour. <strong>Ce que cela montre :</strong> programmation systeme, reseau et concurrence.'],
    ['application web', 'Covoiturage', '<strong>Le besoin :</strong> organiser les utilisateurs et les trajets d’une plateforme de covoiturage. <strong>La solution :</strong> une application Symfony structuree avec PHP, Twig, migrations et configuration d’environnement. <strong>Ce que cela montre :</strong> MVC et travail en equipe.'],
  ]
  projectCards.forEach((card, index) => { card.querySelector('.project-type').textContent = projectCopy[index][0]; card.querySelector('h3').textContent = projectCopy[index][1]; card.querySelector('.project-description').innerHTML = projectCopy[index][2] })
  const timelineCopy = language === 'en' ? [['work-study · Nantes', 'ERP application development and maintenance in ABAP, SAP BTP, SAPUI5/Fiori, unit testing, debugging, deployment and Agile collaboration.'], ['work-study · Saint-Herblain', 'Collaborative task management application with Vue.js and Django, Python data extraction, JSON processing and customer demonstrations.'], ['internship · Rezé', 'Hypervisor upgrade, inventory and incident management, equipment and server monitoring, and ticketing setup.'], ['internship · Orvault', 'XML information reporting with PHP, Office 365 mail automation in PowerShell, templated signatures and Zimbra filter exports.']] : [['alternance · Nantes', 'Développement et maintenance d’applications ERP en ABAP, SAP BTP, SAPUI5/Fiori, tests unitaires, débogage, déploiement et collaboration Agile.'], ['CDD / alternance · St-Herblain', 'Application collaborative en Vue.js et Django, extractions Python, traitements JSON en WLangage, formations et démonstrations clients.'], ['stage · Rezé', 'Montée en version d’un hyperviseur, inventaire, gestion des incidents, supervision des équipements et mise en place d’un outil de ticketing.'], ['stage · Orvault', 'Remontée d’informations XML en PHP, automatisation Office 365 en PowerShell, signatures templatisées et export de filtres Zimbra.']]
  document.querySelectorAll('.timeline-item').forEach((item, index) => { item.querySelector('small').textContent = timelineCopy[index][0]; item.querySelector('p').textContent = timelineCopy[index][1] })
  const stackCopy = language === 'en' ? [['Front-end', 'JavaScript, TypeScript, React, Next.js, Vue.js, HTML5/CSS3, SAPUI5/Fiori'], ['Back-end & data', 'Python, Django, Flask, Java, PHP, Symfony, ABAP, REST & GraphQL APIs'], ['Ops & architecture', 'Docker, Kubernetes, CI/CD, Git, Linux, Cloud, Microservices, Clean Architecture'], ['Methods', 'TDD, DevSecOps, UML, Merise, Scrum, Kanban, monitoring and cybersecurity']] : [['Front-end', 'JavaScript, TypeScript, React, Next.js, Vue.js, HTML5/CSS3, SAPUI5/Fiori'], ['Back-end & data', 'Python, Django, Flask, Java, PHP, Symfony, ABAP, APIs REST & GraphQL'], ['Ops & architecture', 'Docker, Kubernetes, CI/CD, Git, Linux, Cloud, Microservices, Clean Architecture'], ['Methodes', 'TDD, DevSecOps, UML, Merise, Scrum, Kanban, supervision et cybersecurite']]
  document.querySelectorAll('.stack-column').forEach((column, index) => { column.querySelector('h3').textContent = stackCopy[index][0]; column.querySelector('p').textContent = stackCopy[index][1] })
  const creative = document.querySelector('.creative-section'); creative.querySelector('h2').innerHTML = language === 'en' ? 'I build systems.<br /><em>I write worlds.</em>' : 'Je code des systèmes.<br /><em>J’écris des mondes.</em>'; creative.querySelector('p:not(.eyebrow)').textContent = language === 'en' ? 'Alongside development, I build spaces for texts, fragments and ideas. Writing keeps me attentive to rhythm, detail and everything that happens between a person and an interface.' : 'En parallèle du développement, j’écris et je construis des espaces pour les textes, les fragments et les idées. Cette pratique garde mon regard attentif au rythme, au détail et à tout ce qui se joue entre une personne et une interface.'
  languageToggle.textContent = language === 'fr' ? 'EN' : 'FR'
  document.documentElement.lang = language
  localStorage.setItem('portfolio-language', language)
}
const savedLanguage = localStorage.getItem('portfolio-language') || 'fr'
applyLanguage(savedLanguage)
languageToggle.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'fr' ? 'en' : 'fr'))

const particleCanvas = document.createElement('canvas')
particleCanvas.className = 'particle-canvas'
particleCanvas.setAttribute('aria-hidden', 'true')
document.body.prepend(particleCanvas)
const particleContext = particleCanvas.getContext('2d')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const particles = Array.from({ length: 36 }, (_, index) => ({ angle: Math.random() * Math.PI * 2, radius: 80 + Math.random() * 520, speed: (0.00008 + Math.random() * 0.00022) * (index % 3 === 0 ? -1 : 1), size: 1 + Math.random() * 2, alpha: .16 + Math.random() * .34 }))
const resizeParticles = () => { particleCanvas.width = window.innerWidth * window.devicePixelRatio; particleCanvas.height = window.innerHeight * window.devicePixelRatio; particleCanvas.style.width = `${window.innerWidth}px`; particleCanvas.style.height = `${window.innerHeight}px`; particleContext.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0) }
const renderParticles = (time) => { if (!reducedMotion.matches) { const centerX = window.innerWidth * .72; const centerY = window.innerHeight * .35; particleContext.clearRect(0, 0, window.innerWidth, window.innerHeight); particles.forEach((particle) => { particle.angle += particle.speed * 16; const x = centerX + Math.cos(particle.angle) * particle.radius; const y = centerY + Math.sin(particle.angle) * particle.radius * .55; particleContext.beginPath(); particleContext.fillStyle = `rgba(99, 232, 255, ${particle.alpha})`; particleContext.shadowBlur = 12; particleContext.shadowColor = '#3bd5ff'; particleContext.arc(x, y, particle.size, 0, Math.PI * 2); particleContext.fill() }); particleContext.shadowBlur = 0 } requestAnimationFrame(renderParticles) }
resizeParticles()
window.addEventListener('resize', resizeParticles)
requestAnimationFrame(renderParticles)

document.addEventListener('pointerdown', (event) => { if (reducedMotion.matches) return; const glow = document.createElement('span'); glow.className = 'click-glow'; glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; document.body.appendChild(glow); glow.addEventListener('animationend', () => glow.remove(), { once: true }) })

const terminalOverlay = document.createElement('div')
terminalOverlay.className = 'terminal-overlay'
terminalOverlay.innerHTML = '<div class="interactive-terminal" role="dialog" aria-modal="true" aria-labelledby="terminal-title"><div class="terminal-top"><span class="terminal-dots"><b></b><b></b><b></b></span><span id="terminal-title">samuel@portfolio:~/interactive</span><button type="button" aria-label="Fermer le terminal">×</button></div><div class="terminal-output" id="terminal-output"><p>portfolio shell v1.0</p><p>choose a command or type it below.</p></div><div class="terminal-quick-actions" aria-label="Commandes disponibles"><span>commands /</span><button type="button" data-terminal-command="help">help</button><button type="button" data-terminal-command="about">about</button><button type="button" data-terminal-command="projects">projects</button><button type="button" data-terminal-command="contact">contact</button><button type="button" data-terminal-command="clear">clear</button></div><form class="terminal-form"><span>➜</span><input aria-label="Commande terminal" placeholder="taper une commande..." autocomplete="off" spellcheck="false" /></form></div></div>'
document.body.appendChild(terminalOverlay)
document.querySelector('.nav').insertAdjacentHTML('afterbegin', '<button class="terminal-launch" type="button">terminal ↯</button>')
const terminalOutput = terminalOverlay.querySelector('#terminal-output')
const terminalInput = terminalOverlay.querySelector('input')
const terminalCommands = { help: 'commands: help · about · projects · contact · clear', about: 'Samuel Ravard / développeur full stack / Nantes / alternance 2026', projects: 'projects/: Impresario · Query · Light Cycle · Covoiturage', contact: 'mail: samuelravard@gmail.com / linkedin: samuel-ravard', clear: '' }
const printTerminal = (command) => { const value = terminalCommands[command] ?? `command not found: ${command}`; if (command === 'clear') terminalOutput.innerHTML = ''; else terminalOutput.insertAdjacentHTML('beforeend', `<p><span>➜</span> ${command}</p><p class="terminal-response">${value}</p>`); terminalOutput.scrollTop = terminalOutput.scrollHeight }
document.querySelector('.terminal-launch').addEventListener('click', () => { terminalOverlay.classList.add('is-open'); terminalInput.focus() })
terminalOverlay.querySelector('.terminal-top button').addEventListener('click', () => terminalOverlay.classList.remove('is-open'))
terminalOverlay.querySelector('form').addEventListener('submit', (event) => { event.preventDefault(); printTerminal(terminalInput.value.trim().toLowerCase()); terminalInput.value = '' })
terminalOverlay.querySelectorAll('[data-terminal-command]').forEach((button) => button.addEventListener('click', () => printTerminal(button.dataset.terminalCommand)))

document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('is-active')); button.classList.add('is-active'); const filter = button.dataset.filter; document.querySelectorAll('.project-card').forEach((card) => { card.classList.toggle('is-filtered', filter !== 'all' && !card.dataset.tech.includes(filter)) }) }))

const detailOverlay = document.createElement('div')
detailOverlay.className = 'detail-overlay'
detailOverlay.innerHTML = '<div class="detail-modal" role="dialog" aria-modal="true"><button class="detail-close" type="button" aria-label="Fermer">×</button><span class="project-type" id="detail-type"></span><h2 id="detail-title"></h2><p id="detail-summary"></p><div class="detail-body" id="detail-body"></div><div class="detail-actions"><a class="button button-primary" id="detail-github" target="_blank" rel="noreferrer">Voir le repository ↗</a></div></div>'
document.body.appendChild(detailOverlay)
const openProjectDetail = (id) => { const project = projectDetails.find((item) => item.id === id); detailOverlay.querySelector('#detail-type').textContent = project.type; detailOverlay.querySelector('#detail-title').textContent = project.title; detailOverlay.querySelector('#detail-summary').textContent = project.summary; detailOverlay.querySelector('#detail-body').textContent = project.details; detailOverlay.querySelector('#detail-github').href = project.github; detailOverlay.classList.add('is-open') }
document.querySelectorAll('[data-project-detail]').forEach((button) => button.addEventListener('click', () => openProjectDetail(button.dataset.projectDetail)))
detailOverlay.querySelector('.detail-close').addEventListener('click', () => detailOverlay.classList.remove('is-open'))
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') { terminalOverlay.classList.remove('is-open'); detailOverlay.classList.remove('is-open') } })

const header = document.querySelector('.site-header')
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24))

const gameOverlay = document.querySelector('#game-overlay')
const gameCanvas = document.querySelector('#game-canvas')
const gameContext = gameCanvas.getContext('2d')
const scoreElement = document.querySelector('#game-score')
const bestElement = document.querySelector('#game-best')
const statusElement = document.querySelector('#game-status')
const aiModeElement = document.querySelector('#ai-mode')
const cellSize = 12
const gridWidth = gameCanvas.width / cellSize
const gridHeight = gameCanvas.height / cellSize
let gameTimer
let player
let rival
let score = 0
let bestScore = Number(localStorage.getItem('light-cycle-best') || 0)
let aiMode = 'standby'

const aiModes = [
  { id: 'hunter', label: 'hunter', description: 'tracks your position' },
  { id: 'chaos', label: 'chaos', description: 'changes direction often' },
  { id: 'interceptor', label: 'interceptor', description: 'cuts off your route' },
  { id: 'survivor', label: 'survivor', description: 'looks for open space' },
]

const directions = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }
const opposite = { up: 'down', down: 'up', left: 'right', right: 'left' }

function createRider(x, y, direction, color) {
  return { x, y, direction, color, trail: [{ x, y }] }
}

function resetGame() {
  clearInterval(gameTimer)
  score = 0
  aiMode = aiModes[Math.floor(Math.random() * aiModes.length)]
  player = createRider(10, 17, 'right', '#55dcff')
  rival = createRider(gridWidth - 11, gridHeight - 17, 'left', '#ff8a3d')
  scoreElement.textContent = '000'
  bestElement.textContent = String(bestScore).padStart(3, '0')
  aiModeElement.textContent = `ai: ${aiMode.label}`
  statusElement.textContent = 'press start to ride'
  drawGame()
}

function drawGame() {
  gameContext.fillStyle = '#071017'
  gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
  gameContext.strokeStyle = 'rgba(85, 220, 255, .08)'
  gameContext.lineWidth = 1
  for (let x = 0; x <= gridWidth; x += 1) { gameContext.beginPath(); gameContext.moveTo(x * cellSize, 0); gameContext.lineTo(x * cellSize, gameCanvas.height); gameContext.stroke() }
  for (let y = 0; y <= gridHeight; y += 1) { gameContext.beginPath(); gameContext.moveTo(0, y * cellSize); gameContext.lineTo(gameCanvas.width, y * cellSize); gameContext.stroke() }
  drawRider(player)
  drawRider(rival)
}

function drawRider(rider) {
  gameContext.shadowBlur = 13
  gameContext.shadowColor = rider.color
  gameContext.fillStyle = rider.color
  rider.trail.forEach((segment, index) => gameContext.fillRect(segment.x * cellSize + 2, segment.y * cellSize + 2, cellSize - 4, cellSize - 4))
  gameContext.shadowBlur = 0
  const head = rider.trail[rider.trail.length - 1]
  gameContext.fillRect(head.x * cellSize, head.y * cellSize, cellSize, cellSize)
}

function stepRider(rider) {
  const move = directions[rider.direction]
  const next = { x: rider.x + move.x, y: rider.y + move.y }
  rider.x = next.x
  rider.y = next.y
  rider.trail.push(next)
  return next
}

function hitTrail(point, trail) { return trail.some((segment) => segment.x === point.x && segment.y === point.y) }

function availableDirections(rider) {
  return Object.keys(directions).filter((direction) => {
    if (opposite[rider.direction] === direction) return false
    const move = directions[direction]
    const point = { x: rider.x + move.x, y: rider.y + move.y }
    return point.x >= 0 && point.x < gridWidth && point.y >= 0 && point.y < gridHeight && !hitTrail(point, player.trail) && !hitTrail(point, rival.trail)
  })
}

function distanceToPlayer(point) { return Math.abs(point.x - player.x) + Math.abs(point.y - player.y) }

function openSpace(point, direction) {
  const move = directions[direction]
  let space = 0
  let next = point
  while (next.x >= 0 && next.x < gridWidth && next.y >= 0 && next.y < gridHeight && !hitTrail(next, player.trail) && !hitTrail(next, rival.trail)) {
    space += 1
    next = { x: next.x + move.x, y: next.y + move.y }
  }
  return space
}

function chooseAIDirection() {
  const options = availableDirections(rival)
  if (!options.length) return
  if (aiMode.id === 'chaos' && Math.random() < .55) { rival.direction = options[Math.floor(Math.random() * options.length)]; return }
  const target = aiMode.id === 'interceptor' ? { x: player.x + directions[player.direction].x * 8, y: player.y + directions[player.direction].y * 8 } : player
  const ranked = options.map((direction) => {
    const move = directions[direction]
    const point = { x: rival.x + move.x, y: rival.y + move.y }
    return { direction, distance: Math.abs(point.x - target.x) + Math.abs(point.y - target.y), space: openSpace(point, direction) }
  })
  if (aiMode.id === 'survivor') ranked.sort((a, b) => b.space - a.space)
  else ranked.sort((a, b) => a.distance - b.distance)
  rival.direction = ranked[0].direction
}

function gameStep() {
  chooseAIDirection()
  const playerNext = stepRider(player)
  const rivalNext = stepRider(rival)
  const playerHit = playerNext.x < 0 || playerNext.x >= gridWidth || playerNext.y < 0 || playerNext.y >= gridHeight || hitTrail(playerNext, player.trail.slice(0, -1)) || hitTrail(playerNext, rival.trail)
  const rivalHit = rivalNext.x < 0 || rivalNext.x >= gridWidth || rivalNext.y < 0 || rivalNext.y >= gridHeight || hitTrail(rivalNext, rival.trail.slice(0, -1)) || hitTrail(rivalNext, player.trail)
  score += 1
  scoreElement.textContent = String(score).padStart(3, '0')
  drawGame()
  if (playerHit || rivalHit || (playerNext.x === rivalNext.x && playerNext.y === rivalNext.y)) endGame(playerHit && !rivalHit ? 'system failure' : 'rival disconnected')
}

function endGame(message) {
  clearInterval(gameTimer)
  statusElement.textContent = `${message} / press restart`
  if (score > bestScore) { bestScore = score; localStorage.setItem('light-cycle-best', String(bestScore)); bestElement.textContent = String(bestScore).padStart(3, '0') }
}

function startGame() { resetGame(); statusElement.textContent = 'ride'; gameTimer = setInterval(gameStep, 105) }
function setDirection(nextDirection) { if (player && opposite[player.direction] !== nextDirection) player.direction = nextDirection }

document.querySelectorAll('#open-game, .open-game-trigger').forEach((button) => button.addEventListener('click', () => { gameOverlay.classList.add('is-open'); gameOverlay.setAttribute('aria-hidden', 'false'); resetGame(); document.querySelector('#start-game').focus() }))
document.querySelector('#close-game').addEventListener('click', () => { gameOverlay.classList.remove('is-open'); gameOverlay.setAttribute('aria-hidden', 'true'); clearInterval(gameTimer) })
document.querySelector('#start-game').addEventListener('click', startGame)
document.querySelectorAll('[data-direction]').forEach((button) => button.addEventListener('click', () => setDirection(button.dataset.direction)))
window.addEventListener('keydown', (event) => { const keyMap = { ArrowUp: 'up', w: 'up', ArrowDown: 'down', s: 'down', ArrowLeft: 'left', a: 'left', ArrowRight: 'right', d: 'right' }; if (event.key === 'Escape' && gameOverlay.classList.contains('is-open')) document.querySelector('#close-game').click(); if (gameOverlay.classList.contains('is-open') && keyMap[event.key]) { event.preventDefault(); setDirection(keyMap[event.key]) } })

const revealElements = document.querySelectorAll('.ticker, .content-section, .contact-section')
revealElements.forEach((element, index) => element.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`))
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px' })
revealElements.forEach((element) => revealObserver.observe(element))

document.body.insertAdjacentHTML('beforeend', '<aside class="filesystem-rail" aria-label="Arborescence du portfolio"><div class="filesystem-title"><span>workspace</span><b>portfolio/</b></div><div class="filesystem-tree"><button class="is-active" data-folder-target="top" type="button">├─ 00_home/</button><button data-folder-target="work" type="button">├─ 01_projects/</button><button data-folder-target="github-stats" type="button">├─ 02_github/</button><button data-folder-target="path" type="button">├─ 03_experience/</button><button data-folder-target="stack" type="button">├─ 04_stack/</button><button data-folder-target="creative" type="button">├─ 05_creative/</button><button data-folder-target="contact" type="button">└─ 06_contact/</button></div><div class="filesystem-current">~/portfolio/</div></aside>')
const folderTargets = [...document.querySelectorAll('[data-folder-target]')]
const folderSections = folderTargets.map((button) => ({ button, section: document.querySelector(`#${button.dataset.folderTarget}`) })).filter((item) => item.section)
folderTargets.forEach((button) => button.addEventListener('click', () => { document.querySelector(`#${button.dataset.folderTarget}`).scrollIntoView({ behavior: 'smooth' }) }))
const currentFolder = document.querySelector('.filesystem-current')
let folderScrollFrame
const updateActiveFolder = () => {
  const marker = window.scrollY + window.innerHeight * .32
  let active = folderSections[0]
  folderSections.forEach((item) => { if (item.section.getBoundingClientRect().top + window.scrollY <= marker) active = item })
  if (active) { folderTargets.forEach((button) => button.classList.toggle('is-active', button === active.button)); currentFolder.textContent = `~/portfolio/${active.section.id}/` }
}
const scheduleFolderUpdate = () => { if (!folderScrollFrame) folderScrollFrame = requestAnimationFrame(() => { updateActiveFolder(); folderScrollFrame = null }) }
window.addEventListener('scroll', scheduleFolderUpdate, { passive: true })
updateActiveFolder()

resetGame()

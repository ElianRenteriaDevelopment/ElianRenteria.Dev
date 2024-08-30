<script setup>
    import '../styles/components/hero.css'
    import '../styles/components/about.css'
    import '../styles/components/featured.css'
    import '../styles/components/footer.css'
    import '../styles/components/aboutSite.css'
</script>

<template>
    <main>
      <section class="hero container">
        <img class="hero__img" src="../assets/images/profile/small.jpg" alt="Profile Picture">
        <h2 class="hero__subtitle">Hi, I'm Elian 🐥</h2>
        <h1 class="hero__title">JUNIOR<br>SOFTWARE ENGINEER</h1>
        <p class="hero__description">I create <strong>Web / Mobile / Cloud</strong> apps that solve real problems. Whether it’s Python, JavaScript, or whatever tool fits the job, I’m all about building <strong>Secure</strong> and <strong>Scalable</strong> solutions. Let’s make something impactful together.</p>
        <RouterLink class="hero__btn btn" to="/contact">Reach out</RouterLink>
      </section>
      <section class="about container section">
        <div class="about__content">
          <h2 class="about__title">About 👨🏻‍💻</h2>
          <p class="about__description">I’m all about solving real-world problems with code. Whether it’s building applications or <strong>designing systems</strong>, I love creating practical solutions that make a meaningful impact.</p>
          <p class="about__description">I thrive in team settings. From leading projects in school to working with students at The Coder School, I know that the best software comes from great <strong>collaboration</strong>. I’m all about working together to build something awesome.</p>
          <p class="about__description">I’m always hungry to <strong>learn</strong> more. Whether it’s diving into a new framework, exploring cloud deployment, or picking up a new programming language, I’m constantly expanding my skills to take on new challenges and stay ahead of the curve.</p>
          <hr class="about__hr">
          <h3 class="about__title">Technologies 💻</h3>
          <div class="about__ul__container">
            <div class="about__ul__row">
              <ul class="about__ul">
                <h2 class="about__title2">Frontend</h2>
                <li class="about__li"> JavaScript / TypeScript</li>
                <li class="about__li"> Vue</li>
                <li class="about__li"> React-Native</li>
                <li class="about__li"> TailwindCSS</li>
              </ul>
              <ul class="about__ul">
                <h2 class="about__title2">Backend</h2>
                <li class="about__li"> Python</li>
                <li class="about__li"> Node JS</li>
                <li class="about__li"> Fast-API / Express</li>
                <li class="about__li"> PostgreSQL / MongoDB</li>
              </ul>
            </div>
            <div class="about__ul__row">
              <ul class="about__ul">
                <h2 class="about__title2">DevOps</h2>
                <li class="about__li"> Docker</li>
                <li class="about__li"> Nginx</li>
                <li class="about__li"> AWS / Linode</li>
              </ul>
              <ul class="about__ul">
                <h2 class="about__title2">CI/CD</h2>
                <li class="about__li"> Git / Github</li>
                <li class="about__li"> Jenkins</li>
                <li class="about__li"> Github Actions</li>
              </ul>
              
            </div>
          </div>
        </div>
        <div class="about__image__container">
          <img class="about__image" src="../assets/images/profile/main.jpg" alt="Profile Picture"/>
        </div>
      </section>
      <section class="featured container section">
        <h3 class="featured__subtitle">Featured Project</h3>
        <div class="featured__wrapper">
          <h2 class="featured__title">🚘 Parking Buddy</h2>
          <a class="featured__link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg></a>
        </div>
        <p class="featured__description">CSUSM has multiple parking lots, however, during the rush hours, it is still very difficult for students to find a parking spot. Sometimes students may need to move across different parking lots in order to find one, which could cause significant delays. To help resolve this, this project aims to build a crowd-sourced mobile app that allows students to contribute their nearby parking spots info. At the same time, students using this app could quickly and easily find an available parking spot. Around 14,000 students on campus will use this app, potentially impacting the whole CSUSM community.</p>
        <div class="featured__info-container">
          <div>
            <h3 class="featured__label">Tech Stack</h3>
            <ul class="featured__techStack">
              <li class="featured__info">Expo</li>
              <li class="featured__info">React-Native</li>
              <li class="featured__info">Firebase</li>
              <li class="featured__info">Git</li>
              <li class="featured__info">Github</li>
              <li class="featured__info">Axios</li>
              <li class="featured__info">React-Native-Maps SDK</li>
            </ul>
          </div>
          <div>
            <h3 class="featured__label">Project type</h3>
            <p class="featured__info">Fullstack-Mobile</p>
          </div>
          <div>
            <h3 class="featured__label">Timeline</h3>
            <p class="featured__info">August 2023-December 2023</p>
          </div>
        </div>
        <p class="featured__img__title">login screen</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/login.png" class="featured__img"></div>
        <p class="featured__img__title">database structure</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/database.png" class="featured__img"></div>
        <p class="featured__img__title">parking structure UI</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/map1.png" class="featured__img"></div>
        <p class="featured__img__title">parking lot UI</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/map2.png" class="featured__img"></div>
        <p class="featured__img__title">university API implementation</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/map3.png" class="featured__img"></div>
        <p class="featured__img__title">Lot Status map overlay</p>
        <div class="w-full flex justify-content-center"><img src="../assets/images/parkingBuddy/map4.png" class="featured__img"></div>
      </section>
      <section class="section container">
        <h2 class="aboutSite__title">🌐 About This Site</h2>
        <div class="flex flex-column align-items-center">
          <p class="aboutSite__subtitle">Built With</p>
          <div class="flex justify-content-center align-items-center aboutSite__tech">
            <img src="../assets/images/aboutSite/vue-svgrepo-com.svg" alt="Vue">
            <img src="../assets/images/aboutSite/primevue-logo.webp" alt="PrimeVue">
            <img src="../assets/images/aboutSite/tailwind-svgrepo-com.svg" alt="TailwindCSS">
            <img src="../assets/images/aboutSite/Threejs-logo.svg" alt="ThreeJS">
          </div>
          <p class="aboutSite__subtitle">Deployed Using</p>
          <div class="flex justify-content-center align-items-center aboutSite__tech">
            <img src="../assets/images/aboutSite/git-svgrepo-com.svg" alt="Git">
            <img src="../assets/images/aboutSite/github-svgrepo-com.svg" alt="Github">
            <img src="../assets/images/aboutSite/docker-svgrepo-com (1).svg" alt="Docker">
            <img src="../assets/images/aboutSite/nginx-svgrepo-com.svg" alt="Nginx">
            <img src="../assets/images/aboutSite/GitHub Actions.svg" alt="GitHub Actions">
          </div>
          <p class="aboutSite__subtitle">Deployed On</p>
          <div class="flex justify-content-center align-items-center aboutSite__tech">
            <img src="../assets/images/aboutSite/digital-ocean-svgrepo-com.svg" alt="Digital Ocean">
          </div>
        </div>
      </section>
      <section class="section container">
        <p class="footer__logo" style="opacity: .5;">~Elian Renteria~</p>
      </section>
    </main>
    <footer>
    </footer>
</template>

<style scoped>
    
</style>
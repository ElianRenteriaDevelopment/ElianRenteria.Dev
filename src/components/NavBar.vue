<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';
import '../styles/components/header.css';

const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const element = document.querySelector('html');
  element.classList.add('my-app-dark');
});
</script>

<template>
  <header class="header container">
    <nav>
      <ul class="header__menu" v-if="!isMenuOpen">
        <li>
          <RouterLink 
            to="/" 
            class="header__link"
            :class="{ 'active-link': route.path === '/' }"
          >Home</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/projects" 
            class="header__link"
            :class="{ 'active-link': route.path === '/projects' }"
          >Projects</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/contact" 
            class="header__link"
            :class="{ 'active-link': route.path === '/contact' }"
          >Contact</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/resume" 
            class="header__resume btn"
            :class="{ 'active-link': route.path === '/resume' }"
          >Resume</RouterLink>
        </li>
      </ul>
      <button class="header__bars" @click="toggleMenu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M4.47 4.47a.75.75 0 0 1 1.06 0L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 1 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>

      <ul v-if="isMenuOpen" class="header__dropdown">
        <li>
          <RouterLink 
            to="/" 
            class="header__link"
            :class="{ 'active-link': route.path === '/' }"
          >Home</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/projects" 
            class="header__link"
            :class="{ 'active-link': route.path === '/projects' }"
          >Projects</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/contact" 
            class="header__link"
            :class="{ 'active-link': route.path === '/contact' }"
          >Contact</RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/resume" 
            class="header__resume btn"
            :class="{ 'active-link': route.path === '/resume' }"
          >Resume</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.active-link {
  color: var(--clr-slate400);
}

.active-link.btn {
  color: white;
  background-color: var(--clr-indigo);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.5), 0 6px 6px rgba(79, 70, 229, 0.5), 0 0 100px -10px var(--clr-indigo);
}

/* Styles for dropdown menu */
.header__dropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: var(--clr-slate800);
  opacity: 0.9;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-top: 1.5rem;
}

.header__dropdown li {
  margin: 10px 0;
  list-style: none;
  color: var(--clr-light);
}
a{
    text-decoration: none;
}
.header__bars svg {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.header__bars svg:nth-child(1) {
  transform-origin: center;
}

.header__bars svg:nth-child(2) {
  transform-origin: center;
}


</style>


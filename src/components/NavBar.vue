<script setup>
import { RouterLink, useRoute } from 'vue-router';
import '../styles/components/header.css';

const route = useRoute();

onMounted(() => {
  const element = document.querySelector('html');
  element.classList.add('my-app-dark');
});
</script>

<template>
  <header class="header container">
    <nav>
      <ul class="header__menu">
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
      <button class="header__bars">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>          
      </button>
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
</style>

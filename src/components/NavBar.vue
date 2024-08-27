<script setup>
    import { RouterLink } from 'vue-router';
import '../styles/components/header.css'
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
            <RouterLink to="/" class="header__link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" class="header__link">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="header__link">Contact</RouterLink>
          </li>
          <li>
            <RouterLink to="/resume" class="header__resume btn">Resume</RouterLink>
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
</style>
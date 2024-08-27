<script setup>
  import { ref, onMounted } from 'vue';
  

  const showButton = ref(false);
  const fadeIn = ref(false);
  const downloadLink = 'https://drive.google.com/uc?export=download&id=1FJC8rOLGk-q0I6bO8sk9wMsVF930Ptrh';

  onMounted(() => {
    setTimeout(() => {
      fadeIn.value = true;
    }, 100); 
  });
  </script>


<template>
    <div class="resume__container" :class="{ 'fade-in-resume': fadeIn }">
      <div class="resume-container">
        <div class="image-container" @mouseover="showButton = true" @mouseleave="showButton = false">
          <img src="../assets/images/resume/Elian_Renteria.png" alt="resume" class="resume" />
          <a :href="downloadLink" class="download-button" v-show="showButton" download>
            <i class="pi pi-print"></i> Download
          </a>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .resume__container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
    opacity: 0;
    transition: opacity 5s ease;
  }
  
  .fade-in-resume {
    opacity: 1;
  }
  
  .resume-container {
    background-color: #1e293bb7;
    padding: 2%;
    border-radius: 1%;
    margin-left: 5%;
    margin-right: 5%;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
  }
  
  .download-button {
    position: absolute;
    margin-top: 0.5rem;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(40, 40, 40, 0.85);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: var(--clr-light);
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }
  
  .download-button:hover {
    opacity: 0.8;
  }
  
  .resume {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  /* Responsive Styles */
  @media (min-width: 768px) {
    .resume-container {
      margin-top: 1em;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  
  @media (min-width: 1024px) {
    .resume-container {
      margin-top: 2em;
      margin-left: 15%;
      margin-right: 15%;
    }
  }
  
  @media (min-width: 1280px) {
    .resume-container {
      margin-top: 2em;
      margin-left: 20%;
      margin-right: 20%;
    }
  }
  </style>
  
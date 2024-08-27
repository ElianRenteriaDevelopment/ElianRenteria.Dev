<template>
    <div class="loading">
        <div class="title">
            <span class="name" ref="nameText">Elian Renteria</span>
            <span class="portfolio" ref="portfolioText">Portfolio</span>
        </div>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue';
    
    const nameText = ref(null);
    const portfolioText = ref(null);
    
    onMounted(() => {
        setTimeout(() => {
        nameText.value.classList.add('fade-out');
        }, 1500);
    
        setTimeout(() => {
        portfolioText.value.classList.add('fade-out');
        }, 2500);
    });
</script>
<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #020617;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .title {
        color: #f1f5f9;
        font-size: 2rem; 
        text-align: center;
        font-family: 'Roboto', sans-serif !important; 
        font-weight: 100 !important;
        letter-spacing: -0.02em;
        line-height: 0.9;
    }
    
    .name {
        color: #f1f5f9;
        opacity: 1; 
        transition: opacity 1s; 
        font-weight: 300;
    }
    
    .portfolio {
        opacity: 1; 
        transition: opacity 1s; 
        font-weight: 100;
    }
    
    .fade-out {
        opacity: 0 !important; 
    }
</style>
  
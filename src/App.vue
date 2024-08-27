<script setup>
  import Loading from './components/Loading.vue';
  import NavBar from './components/NavBar.vue';
  import Background from './components/Background.vue';
  import { useRoute } from 'vue-router';

  const isLoading = ref(true);
  const route = useRoute();

  const fadeOutLoading = () => {
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('fade-out');
  };

  const fadeInContent = () => {
    const content = document.querySelector('.app__content');
    content.classList.add('fade-in');
  };

  onMounted(() => {
    setTimeout(() => {
      fadeOutLoading();

      setTimeout(() => {
        isLoading.value = false;
        nextTick(() => {
          fadeInContent();
        });
      }, 1000);
    }, 3000);
  });

  const getContentBodyStyles = computed(() => {
    const isResumeRoute = route.name === 'resume';

    return {
      border: '.1px solid #B1B1B1',
      borderRadius: '10px',
      margin: '2%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      height: '83%',
      overflow: isResumeRoute ? 'scroll' : 'hidden !important'
    };
  });

  watch(
    () => route.name,
    (to, from) => {
      console.log('Route changed from', from, 'to', to);
      console.log('Re-evaluating styles...');
    }
  );
</script>

<template>
  <div class="">
    <div class="Background">
      <Background />
    </div>
    <Loading v-if="isLoading" class="loading prevent-hover-change"/>
    <div v-else class="app__content">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .loading {
    opacity: 1;
    transition: opacity 3s ease;
  }

  .loading.fade-out {
    opacity: 0;
  }

  .app__content {
    opacity: 0;
    transition: opacity 2s ease-in; 
    font-family: 'Roboto', sans-serif !important;
    font-weight: 300 !important;
    height: 100vh;
  }

  .app__content.fade-in {
    opacity: 1;
  }

  .Background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9999;
  }

  .prevent-hover-change {
    cursor: default !important;
  }

</style>

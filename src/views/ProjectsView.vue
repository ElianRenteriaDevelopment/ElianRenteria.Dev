<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from 'primevue/card';

// Dictionary mapping languages to their SVG paths
const languages = {
  'JavaScript':'/languageIcons/JavaScript.svg', 
  'Python': 'languageIcons/Python.svg', 
  'Java': '/languageIcons/Java.svg', 
  'TypeScript': '/languageIcons/TypeScript.svg', 
  'HTML': '/languageIcons/HTML.svg', 
  'CSS': '/languageIcons/CSS.svg', 
  'Vue': '/languageIcons/Vue.svg', 
  'C': '/languageIcons/C.svg', 
  'C++': '/languageIcons/C++.svg', 
  'Dockerfile': '/languageIcons/dock.svg'
};

const isLoading = ref(true);
const projects = ref([]);

const fetchProjects = async () => {
  try {
    const githubToken = import.meta.env.VITE_githubToken;

    let allRepos = [];
    let page = 1;
    let response;
    do {
      response = await axios.get(`https://api.github.com/users/ElianRenteria/repos?page=${page}&per_page=100&sort=updated&direction=desc`, {
        headers: {
          Authorization: `Bearer ${githubToken}`
        }
      });
      allRepos = [...allRepos, ...response.data];
      page++;
    } while (response.data.length === 100);

    // Fetch languages for each repository
    await Promise.all(allRepos.map(async repo => {
      const languagesResponse = await axios.get(repo.languages_url, {headers: {Authorization: `Bearer ${githubToken}`}});
      repo.languages = Object.keys(languagesResponse.data);
    }));

    // Update state
    projects.value = allRepos;
    isLoading.value = false;
    console.log(allRepos[0].languages);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    isLoading.value = false;
  }
};

// Lifecycle hook to fetch projects on mount
onMounted(() => {
  fetchProjects();
});
</script>

<template>
  <div class="projects-grid">
    <h2>My Projects</h2>
    <div class="p_spinner" v-if="isLoading"><ProgressSpinner /></div>
    <ul class="grid-container">
      <li v-for="project in projects" :key="project.id">
        <a :href="project.html_url" target="_blank" class="card-link">
          <Card class="project-card">
            <template #header>
              <div class="card__header">
                <div class="language-icons">
                    <img v-for="lang in project.languages.filter(lang => languages[lang])"
                     :key="lang"
                     :src="languages[lang]"
                     :alt="`${lang} icon`"
                     class="language-icon"
                />
                </div>
              </div>
            </template>
            <template #title>
              <h3>{{ project.name }}</h3>
            </template>
            <template #subtitle>
              <p class="card__languages">{{ project.languages.join(', ') }}</p>
            </template>
            <template #content>
              <p class="card__description">{{ project.description }}</p>
            </template>
          </Card>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card__languages {
    color: rgba(79, 70, 229,.95);
    font-weight: 700;
    letter-spacing: +0.03em;
}
.card__description {
  color: var(--clr-slate400);
  font-size: var(--size-sm);
}
.language-icons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.language-icon {
    width: 40px;
  height: auto;
}

.p_spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  list-style: none;
  padding: 2rem;
  overflow: auto !important;
}

.card-link {
  display: block;
  height: 100%;
  text-decoration: none;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden !important;
  background-color: rgba(17, 24, 34, .8);
  border-radius: 1rem;
  transition: box-shadow 0.3s ease, padding 0.1s ease;
}

.project-card:hover {
  box-shadow: 0 5px 10px rgba(79, 70, 229, 0.5), 0 3px 3px rgba(79, 70, 229, 0.5), 0 0 40px -4px var(--clr-indigo);
  padding: .1rem;
}

.project-card .p-card-title,
.project-card .p-card-content,
.project-card .p-card-subtitle {
  font-family: 'Roboto', sans-serif !important;
  text-align: center;
}

.project-card .p-card-title {
  font-size: calc(16px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
}

.project-card .p-card-content {
  font-size: calc(8px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 200 !important;
}

.project-card .p-card-subtitle {
  font-size: calc(10px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 200 !important;
}

.projects-grid {
  margin: 0 auto;
  padding: 0%;
  width: 100%;
  height: 100%;
}

.card__header {
    background-color: #000000b2;
    width: 100%;
    height: 100%;
}

h2 {
  text-align: center;
  font-size: var(--size-2xl);
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgb(224, 224, 224);
}

h3 {
    text-align: center;
    font-size: var(--size-base);
    color: rgba(235, 234, 234, 0.89);
    font-weight: 400;
}

p{
    display: flex;
    justify-content: center;
    text-align: center;
}
/* Responsive text sizes */
@media (min-width: 640px) {
  h2 {
    font-size: var(--size-3xl);
  }
  h3 {
    font-size: var(--size-lg);
    }
.card__description {
  font-size: var(--size-base);
}
}

@media (min-width: 768px) {
  h2 {
    font-size: var(--size-4xl);
  }
  h3 {
    font-size: var(--size-xl);
    }
    .card__description {
  font-size: var(--size-lg);
}
}

@media (min-width: 1536px) {
  h2 {
    font-size: var(--size-5xl);
  }
  h3 {
    font-size: var(--size-2xl);
    }
}
</style>


<script setup>
    
</script>

<template>
    <div class="w-full h-full flex flex-column justify-content-start align-items-center">
        <Card>
            <template #title>
                <h1 class="p-card-title">Contact</h1>
            </template>
            <template #content>
                <h2>Email:</h2>
                <p>elianrenteriadevelopment@gmail.com</p>
                <h2>Phone:</h2>
                <p>+1 909-314-3799</p>
                <h2>Social Media:</h2>
                <div class="social-links pt-1 pb-5">
                    <a href="https://linkedin.com/in/elian-renteria-5a467b29b" target="_blank"><i class="pi pi-linkedin" style="font-size: 3.5rem"></i></a>
                    <a href="https://github.com/elianrenteria" target="_blank"><i class="pi pi-github" style="font-size: 3.5rem"></i></a>
                </div>
            </template>
        </Card>
    </div>
  </template>

  
  <style scoped>
  
  .p-card{
    background-color: #030e3f8a;
    transition: all 0.3s ease;
  }
  .social-links {
    width: 100%;
    display: flex;
    flex-direction: row !important;
    justify-content: space-evenly;
    align-items: end;
    margin-top: 20px;
  }
  .social-links a {
    margin-right: 10px;
    color: #333;
    font-size: 24px;
    padding: 0%;
    margin: 0%;
  }
  
  .social-links a:hover {
    transition: color 0.35s ease;
    color: var(--clr-rose);
  }

    h1 {
        color: rgba(224, 224, 224, 0.849);
        font-size: var(--size-4xl);
        font-weight: 600;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 1rem;
    }

    h2 {
        color: var(--clr-slate600);
        font-size: var(--size-2xl);
        font-weight: 500;
        text-align: center;
        padding-top: 1rem;
    }

    p{
        color: var(--clr-slate400);
        font-size: var(--size-lg);
        font-weight: 400;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
  </style>
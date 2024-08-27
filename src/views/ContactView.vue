<script setup>
    
</script>

<template>
    <div class="w-full h-full flex flex-column justify-content-start align-items-center">
        <Card>
            <template #title>
                <h1 class="p-card-title">Contact</h1>
            </template>
            <template #content>
                <h5>Email:</h5>
                <p>elianrenteriadevelopment@gmail.com</p>
                <h5>Phone:</h5>
                <p>+1 909-314-3799</p>
                <h5>Social Media:</h5>
                <div class="social-links">
                    <a href="https://linkedin.com/in/elian-renteria-5a467b29b" target="_blank"><i class="pi pi-linkedin" style="font-size: 2.5rem"></i></a>
                    <a href="https://github.com/elianrenteria" target="_blank"><i class="pi pi-github" style="font-size: 2.5rem"></i></a>
                </div>
            </template>
        </Card>
    </div>
  </template>

  
  <style scoped>
  .p-card{
    background-color: var(--clr-slate800);
    width: 60%;
    height: 60%;
    margin-top: 1rem;
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
    color: var(--clr-rose);
  }
  </style>
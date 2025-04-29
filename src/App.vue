

<template>
   <header class=header-container>
        <ul class="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>       
    <h1> Hey I am LaQuisha Cain</h1>
    <h2>a Full-Stack Vue AWS Developer</h2>
    <img src="/img/portfolio.jpg" alt="Portfolio Image" class="portfolio-photo">
</template>

<script>

export default {
    
  name: 'App'
}
</script>

<style scoped>
h1 {
  color: orange;
}

h2 {
  color: pink;
}

.portfolio-photo {
  width: 300px;
  height: 300px;
}

.nav-list {
  list-style: none; /* removes bullets */
  padding: 0;        /* optional: removes left indent */
  margin: 0;         /* optional: resets default margin */
}

.nav-list li {
  margin-bottom: 8px; /* optional spacing between links */
  text-tranform: uppercase;
  color: white;
}
</style>


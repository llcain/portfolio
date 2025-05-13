<template>

    <header className="header">
        <nav>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Hobbies</a></li>
            </ul>
        </nav>
        <div>
            <h1> Hey I am LaQuisha Cain</h1>
            <h2>a Full-Stack Vue AWS Developer</h2>
            <img src="/img/portfolio.jpg" alt="Portfolio Image" class="portfolio-photo">
        </div>
    </header>

</template>

<style scoped>
.portfolio-photo {
  width: 300px;
  height: 300px;
}
</style>

<script>
export default {
    name: 'Header'
}
</script>
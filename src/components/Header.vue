<template>
    <header className="header">
        <nav>
            <ul className="links">
                <li><router-link to="/">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/hobbies">Hobbies</router-link></li>
            </ul>
        </nav>        
    </header>
</template>

<style scoped>
    .links {
        display: flex;
        justify-content: right;
        margin: 15px;
        list-style: none;
    }
    .links li a {
        margin-left: 20px;
        text-decoration: none;
        color: pink;
        font: 20px;
    }

</style>

<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header className="header">
        <nav>
            <ul className="links">
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Hobbies</a></li>
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
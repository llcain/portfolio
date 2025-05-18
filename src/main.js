import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory } from 'vue-router'

import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Hobbies from './components/Hobbies.vue'

const routes = [
    { path: '/', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/hobbies', component: Hobbies }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

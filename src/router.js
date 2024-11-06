import { createRouter , createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import ProjectsPages from './pages/ProjectsPages.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

const router = createRouter({
    history: createWebHistory(),

    linkExactActiveClass : 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contatti',
            name: 'contacts',
             component: Contacts
        },
        {
            path: '/progetti',
            name: 'projects',
            component: ProjectsPages
        },
        { 
            path: '/project/:id', 
            name: 'project-details', 
            component: ProjectDetails, 
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
        return { top: 0 }; 
    }
})

export {router} 
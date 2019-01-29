import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
import Vacant from './components/Vacant.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/vacant',
            name: 'vacant',
            component: Vacant
        }
    ]
});

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

export default router;
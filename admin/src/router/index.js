import { createRouter, createWebHistory } from "vue-router";
// import isLogged from '@/middleware/isLogged';
// import isNotLogged from '@/middleware/isNotLogged';

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ConversionPage from "@/views/ConversionPage.vue"
import UpdateCurrency from "@/views/UpdateCurrency.vue"
import PairsPage from "@/views/PairsPage.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
 
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
 
  },
  {
    path: "/conversion",
    name: "Conversion",
    component: ConversionPage,
  },
  {
    path: "/pairs",
    name: "Pairs",
    component: PairsPage,
  },
  {
    path: "/update-currency/:currencyId",
    name: "Update-currency",
    component: UpdateCurrency,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;
  
    return (...parameters) => {
      context.next(...parameters);
      const nextMiddleware = nextFactory(context, middleware, index);
      subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}
  
router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];
  
      const context = {
        from,
        next,
        router,
        to,
      };
      const nextMiddleware = nextFactory(context, middleware, 1);
  
      return middleware[0]({ ...context, next: nextMiddleware });
    }
  
    return next();
});

export default router;

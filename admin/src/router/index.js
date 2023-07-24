import { createRouter, createWebHistory } from "vue-router";
// import auth from "@/middleware/auth.js"; // import the auth middleware
// import isNotLogged from '@/middleware/isNotLogged';

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UpdateCurrency from "@/views/UpdateCurrency.vue"
import UpdatePairs from "@/views/UpdatePairs.vue"
import PairsPage from "@/views/PairsPage.vue";
import ApiDocumentation from "@/views/ApiDocumentation.vue";
import isLogged from "@/middleware/isLogged.js"; // import your isLogged middleware

const routes = [
  {
    path: "/",
    name: "API Documentation",
    component: ApiDocumentation,
    
 
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { middleware: [isLogged] }  // protect the home route
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    
  },
  {
    path: "/pairs",
    name: "Pairs",
    component: PairsPage,
    meta: { middleware: [isLogged] }  // protect the home route

  },
  {
    path: "/update-currency/:currencyId",
    name: "Update-currency",
    component: UpdateCurrency,
    props: true ,
    meta: { middleware: [isLogged] }  // protect the home route

  },
  {
    path: "/update-pairs/:currencyId",
    name: "Update-pairs",
    component: UpdatePairs,
    props: true , 
    meta: { middleware: [isLogged] }  // protect the home route

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

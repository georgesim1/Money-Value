import { reactive } from 'vue'
import router from "@/router";
import axiosInstance from "@/services/axios";

export const store = reactive({
    user: false,
    errors: [],
    status: null,
    async getToken() {
        await axiosInstance.get("/sanctum/csrf-cookie");
    },
    async getUser() {
        await this.getToken();
        const data = await axiosInstance.get("/api/user");
        this.user = data.data;
    },
    async handleLogin(data) {
        console.log("🚀 ~ file: auth.js:18 ~ handleLogin ~ data:", data)
        this.errors = [];
        await this.getToken();

        try {
            const res = await axiosInstance.post("/login", {
                email: data.email,
                password: data.password,
            });
            if (res.status == 202) {
                router.push ('/home')
            }
            console.log(res);
        } catch (error) {
            console.log(error)
            // if (error.response.status === 422) {
            //     this.errors = error.response.data.errors;
            // }
        }
    },
    async handleLogout() {
        try {
        const response = await axiosInstance.post("/logout");
        console.log(response);
        // this.user = null;
        if (response.status == 204) {
            router.push ('/login')
        }
        console.log(response);
        } catch (error) {
            console.log(error);
        }
    },
    
});

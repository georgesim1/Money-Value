import { reactive } from 'vue'
import router from "@/router";
import axiosInstance from "@/services/axios";

export const store = reactive({
    user: false,
    errors: [],
    status: null,
    snackbar: { show: false, message: '' },
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
            console.log('Login response:', res);
            if (res.status == 202) {
                console.log('Login successful, updating user state and redirecting to home...');
                this.user = true;  // Update user state here
                router.push ('/home')
            } else {
                console.log('Unexpected status code:', res.status);
            }
        } catch (error) {
            console.log('Login error:', error);
            this.snackbar.show = true;
            this.snackbar.message = 'Invalid username or password. Please try again.';
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

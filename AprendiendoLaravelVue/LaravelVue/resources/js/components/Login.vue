<template>
    <div>
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" />
                <span v-if="errors.email" class="error">{{
                    errors.email[0]
                }}</span>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="form.password" />
                <span v-if="errors.password" class="error">{{
                    errors.password[0]
                }}</span>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <p v-if="message">{{ message }}</p>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            errors: {},
            message: null,
        };
    },
    methods: {
        async login() {
            axios
                .post("/login", {
                    email: this.form.email,
                    password: this.form.password,
                })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    this.$router.push({ name: "Profile" });
                    this.message = "Inicio de sesión exitoso.";
                    this.form = { email: "", password: "" }; // Limpia el formulario
                })
                .catch((error) => {
                    console.error("ERROR: ", error);
                    if (error.response && error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.message = null;
                    } else if (
                        error.response &&
                        error.response.status === 401
                    ) {
                        this.message = "Credenciales inválidas.";
                    } else {
                        this.message = "Error al iniciar sesión.";
                    }
                });
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
</style>

<template>
    <div>
        <h2>Registro</h2>
        <form @submit.prevent="register">
            <div>
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="form.name" />
                <span v-if="errors.name" class="error">{{
                    errors.name[0]
                }}</span>
            </div>
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
            <button type="submit">Registrarse</button>
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
                name: "",
                email: "",
                password: "",
            },
            errors: {},
            message: null,
        };
    },
    methods: {
        async register() {
            axios
                .post("/register", {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                })
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("token", response.data.token);
                    this.$router.push({ name: "Profile" });
                    this.message = "Registro completado con éxito."; // Agrega mensaje de éxito
                    this.form = { name: "", email: "", password: "" }; // Limpia el formulario
                })
                .catch((error) => {
                    console.error("ERROR: ", error);
                    if (error.response && error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.message = null;
                    } else {
                        this.message = "Error al registrar el usuario.";
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

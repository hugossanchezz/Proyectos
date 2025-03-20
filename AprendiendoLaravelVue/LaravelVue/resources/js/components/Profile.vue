<template>
    <div>
        <h2>Perfil</h2>
        <div v-if="user">
            <p>Nombre: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
        <button @click="logout">Cerrar Sesión</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        };
    },
    mounted() {
        fetch("/user", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(response => response.json())
        .then(data => {
            this.user = data;
        })
        .catch(error => {
            console.error("ERROR: ", error);
        });
    },
    methods: {
        logout() {
            fetch("/logout", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            .then(() => {
                localStorage.removeItem("token");
                this.$router.push({ name: "Login" });
            })
            .catch(error => {
                console.error("ERROR: ", error);
            });
        },
    },
}
</script>
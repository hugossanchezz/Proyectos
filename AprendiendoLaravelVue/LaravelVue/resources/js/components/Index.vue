<template>
    <ul>
        <li>
            <router-link to="/books">Libros</router-link>
        </li>
        <li>
            <router-link to="/login">Login</router-link>
        </li>
        <li>
            <router-link to="/register">Register</router-link>
        </li>
        <li>
            <router-link to="/profile">Profile</router-link>
        </li>
    </ul>
    <p>Esto es el Index</p>
    <router-view></router-view>
</template>
<!-- template del formulario de inicio de sesión -->
<form class="form flex" id="formInicioSesion">
    <div class="flex-column">
        <label for="correo">Correo </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/arroba.svg" alt="Icono de arroba">
        <input id="correo" class="input" type="text" placeholder="Correo electrónico">
    </div>

    <div class="flex-column">
        <label for="contrasenia">Contraseña </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de candado">
        <input id="contrasenia" class="input" type="password" placeholder="Contraseña">
    </div>

    <div class="flex-row flex">
        <label class="switch">
            <input type="checkbox" id="recordarme">
            <span class="slider"></span>
        </label>
        <label for="recordarme">Recordarme</label>
    </div>

    <!-- Contenedor para mostrar errores -->
    <div id="errores" class="errorMensaje" style="display: none;"></div>

    <button class="button-submit" type="submit">Iniciar Sesión</button>
    <p class="p">¿No tienes una cuenta? <a class="span" href="?mostrar=registro">Regístrate</a></p>
    <p class="p line">o entra con</p>

    <div class="flex-row">
        <button class="btn google flex">
            <img src="src/assets/img/ico/google.svg" alt="Icono de Google">
            Google
        </button>
    </div>
</form>
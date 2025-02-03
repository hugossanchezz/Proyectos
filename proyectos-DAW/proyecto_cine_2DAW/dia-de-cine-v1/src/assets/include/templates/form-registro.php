<!-- template del formulario de registro -->
<div id="barraProgreso" class="barraProgreso"></div>

<form class="form flex" id="formRegistro">
    <div class="flex-column">
        <label for="usuario">Nombre de usuario</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/user.svg" alt="Icono de usuario">
        <input id="usuario" class="input" type="text" placeholder="Sin caracteres especiales" required>
    </div>
    <div id="error-usuario" class="error-message"></div>

    <div class="flex-column">
        <label for="correo">Correo </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/arroba.svg" alt="Icono de correo">
        <input id="correo" class="input" type="email" placeholder="Correo electrónico" required>
    </div>
    <div id="error-correo" class="error-message"></div>

    <div class="flex-column">
        <label for="contrasenia">Contraseña </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de contraseña">
        <input id="contrasenia" class="input" type="password" placeholder="Contraseña" required>
    </div>
    <div id="error-contrasenia" class="error-message"></div>

    <div class="flex-column">
        <label for="confirmarContrasenia">Confirma tu Contraseña</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de contraseña">
        <input id="confirmarContrasenia" class="input" type="password" placeholder="Confirma tu contraseña" name="confirmarContrasenia" required>
    </div>
    <div id="error-confirmarContrasenia" class="error-message"></div>

    <div class="flex-column">
        <label for="fechaNacimiento">Fecha de Nacimiento</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/calendario.svg" alt="Icono de calendario">
        <input id="fechaNacimiento" class="input" type="date" name="fechaNacimiento" required>
    </div>
    <div id="error-fechaNacimiento" class="error-message"></div>

    <div class="flex-column">
        <label for="generoFavorito">Género favorito</label>
    </div>
    <div class="inputForm flex">
        <select id="generoFavorito" name="generoFavorito" class="input flex" required>
            <option value="accion">Acción</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="cienciaFiccion">Ciencia Ficción</option>
            <option value="terror">Terror</option>
            <option value="romance">Romance</option>
            <option value="documental">Documental</option>
        </select>
    </div>
    <div id="error-generoFavorito" class="error-message"></div>

    <div class="flex-row flex">
        <label class="switch">
            <input type="checkbox" id="aceptarTerminos" required>
            <span class="slider"></span>
        </label>
        <label for="aceptarTerminos"> Acepto los
            <a class="span" href="?mostrar=terminos">términos y condiciones</a>
        </label>
    </div>
    <div id="error-aceptarTerminos" class="error-message"></div>

    <button class="button-submit" type="submit">Registrarse</button>

    <p class="p">¿Ya tienes una cuenta? <a class="span" href="?mostrar=login">Inicia sesión</a></p>
</form>

<!-- template del formulario de registro -->
<form class="form flex">
    <div class="flex-column">
        <label for="usuario">Nombre de usuario</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/user.svg" alt="Icono de usuario">
        <input id="usuario" class="input" type="text" placeholder="Sin caracteres especiales" name="nombre" required>
    </div>

    <div class="flex-column">
        <label for="correo">Correo </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/arroba.svg" alt="Icono de correo">
        <input id="correo" class="input" type="email" placeholder="Correo electrónico" name="correo" required>
    </div>

    <div class="flex-column">
        <label for="contraseña">Contraseña </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de contraseña">
        <input id="contraseña" class="input" type="password" placeholder="Contraseña" name="contraseña" required>
    </div>

    <div class="flex-column">
        <label for="confirmar_contraseña">Confirma tu Contraseña</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de contraseña">
        <input id="confirmar_contraseña" class="input" type="password" placeholder="Confirma tu contraseña" name="confirmar_contraseña" required>
    </div>

    <div class="flex-column">
        <label for="fecha_nacimiento">Fecha de Nacimiento</label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/calendario.svg" alt="Icono de calendario">
        <input id="fecha_nacimiento" class="input" type="date" name="fecha_nacimiento" required>
    </div>

    <div class="flex-column">
        <label for="genero_favorito">Género favorito</label>
    </div>
    <div class="inputForm flex">
        <select id="genero_favorito" name="genero_favorito" class="input flex" required>
            <option value="accion">Acción</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="ciencia_ficcion">Ciencia Ficción</option>
            <option value="terror">Terror</option>
            <option value="romance">Romance</option>
            <option value="documental">Documental</option>
        </select>
    </div>

    <div class="flex-row flex">
        <div>
            <input id="aceptar_terminos" type="checkbox" name="aceptar_terminos" required>
            <label for="aceptar_terminos">  Acepto los <a class="span" href="?mostrar=terminos">términos y condiciones</a></label>
        </div>
    </div>

    <button class="button-submit" type="submit">Registrarse</button>

    <p class="p">¿Ya tienes una cuenta? <a class="span" href="?mostrar=login">Inicia sesión</a></p>
</form>
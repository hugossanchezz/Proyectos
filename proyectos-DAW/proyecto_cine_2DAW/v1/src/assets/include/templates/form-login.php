<!-- template del formulario de inicio de sesión -->
<form class="form flex">
    <div class="flex-column">
        <label for="correo">Correo </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/arroba.svg" alt="Icono de arroba">
        <input id="correo" class="input" type="text" placeholder="Correo electrónico" name="correo">
    </div>

    <div class="flex-column">
        <label for="contraseña">Contraseña </label>
    </div>
    <div class="inputForm flex">
        <img src="src/assets/img/ico/candado.svg" alt="Icono de candado">
        <input id="contraseña" class="input" type="password" placeholder="Contraseña" name="contraseña">
    </div>

    <div class="flex-row flex">
        <input id="recordarme" type="checkbox" name="recordarme" class="checkbox">
        <label for="recordarme">Recuerdame</label>

    </div>

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
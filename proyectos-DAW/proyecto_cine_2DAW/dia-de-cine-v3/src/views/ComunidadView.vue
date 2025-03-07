<template>
  <div>
    <!-- Header común -->
    <Header />

    <!-- Contenido principal -->
    <main class="main-content centrado-flex">
      <!-- Animación de carga -->
      <div id="loader" class="loader" v-if="loading"></div>

      <!-- Contenido principal -->
      <div
        id="contenido-mostrar"
        class="contenido-mostrar centrado-flex"
        v-show="!loading"
      >
        <div class="accordion">
          <div
            class="accordion__item"
            v-for="(item, indice) in elementosForo"
            :key="indice"
          >
            <div
              class="accordion__header flex"
              @click="alternarAcordeon(indice)"
            >
              <div>
                <h3 class="accordion__title">{{ item.titulo }}</h3>
                <p class="accordion__description">{{ item.descripcion }}</p>
                <p class="accordion__type">{{ item.tipo }}</p>
              </div>
              <div class="accordion__toggle-button flex-column">
                <img
                  :src="
                    item.estaAbierto
                      ? '/img/ico/flecha-arriba.svg'
                      : '/img/ico/flecha-abajo.svg'
                  "
                  alt="Flecha"
                />
              </div>
            </div>
            <div class="accordion__content" v-if="item.estaAbierto">
              <div
                class="accordion__comment"
                v-for="(comentario, indiceComentario) in item.comentarios"
                :key="indiceComentario"
              >
                <p class="accordion__comment-user flex">
                  <img src="/img/ico/user.svg" alt="" />
                  {{ comentario.usuario }}
                </p>
                <p class="accordion__comment-message">
                  {{ comentario.mensaje }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer común -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: true, // controla si mostramos el loader o el contenido
      elementosForo: [
        {
          titulo: "Stranger Things",
          descripcion:
            "Discusión sobre la última temporada y teorías para la próxima",
          tipo: "Serie",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "Eleven11",
              mensaje:
                "¡No puedo creer ese final! ¿Alguien tiene teorías sobre lo que pasará en la próxima temporada?",
            },
            {
              usuario: "WillTheWise",
              mensaje:
                "Creo que veremos más del Upside Down y cómo afecta al mundo real.",
            },
            {
              usuario: "MaxFan",
              mensaje:
                "¡Esa escena con Max fue increíble! No puedo esperar a ver qué pasa con su personaje.",
            },
          ],
        },
        {
          titulo: "El Padrino",
          descripcion:
            "Análisis de los personajes y su evolución a lo largo de la trilogía",
          tipo: "Película",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "Corleone_Fan",
              mensaje:
                "La transformación de Michael de héroe de guerra a jefe de la mafia es simplemente magistral.",
            },
            {
              usuario: "CinemaExpert",
              mensaje:
                "El contraste entre Vito y Michael Corleone es uno de los aspectos más interesantes de la saga.",
            },
            {
              usuario: "SicilianSoul",
              mensaje:
                "La cinematografía en Sicilia es impresionante. Cada escena está cargada de simbolismo.",
            },
          ],
        },
        {
          titulo: "Breaking Bad",
          descripcion: "Debate sobre las decisiones morales de Walter White",
          tipo: "Serie",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "Heisenberg",
              mensaje:
                "Walter White es un personaje fascinante. ¿Creen que sus acciones estaban justificadas?",
            },
            {
              usuario: "JessePinkman",
              mensaje:
                "Yo, Mr. White empezó con buenas intenciones, pero se dejó llevar por el poder, ¿sabes?",
            },
            {
              usuario: "SkylerFan",
              mensaje:
                "A veces siento que Skyler fue demasiado criticada. ¿Ustedes qué opinan?",
            },
          ],
        },
        {
          titulo: "Juego de Tronos",
          descripcion: "Discusión sobre el final de la serie y los libros",
          tipo: "Serie",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "TargaryenLover",
              mensaje:
                "El final me dejó con muchas preguntas... ¿Creen que los libros cambiarán el destino de Daenerys?",
            },
            {
              usuario: "JonSnow",
              mensaje:
                "Sabía que mi destino estaba sellado, pero esperaba algo diferente para el final.",
            },
            {
              usuario: "AryaFan",
              mensaje:
                "¡Arya fue la mejor! Su viaje por el mundo es algo que me gustaría ver en un spin-off.",
            },
          ],
        },
        {
          titulo: "Interstellar",
          descripcion:
            "Debate sobre la ciencia y el mensaje emocional de la película",
          tipo: "Película",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "SpaceLover",
              mensaje:
                "Las representaciones científicas de los agujeros negros fueron espectaculares.",
            },
            {
              usuario: "Murph",
              mensaje:
                "El mensaje sobre el amor trascendiendo el tiempo y el espacio me llegó al alma.",
            },
            {
              usuario: "PhysicsGeek",
              mensaje:
                "¿Creen que la teoría del tiempo en la película es científicamente plausible?",
            },
          ],
        },
        {
          titulo: "The Dark Knight",
          descripcion: "Análisis de la actuación de Heath Ledger como el Joker",
          tipo: "Película",
          estaAbierto: false,
          comentarios: [
            {
              usuario: "JokerFan",
              mensaje:
                "La mejor interpretación del Joker en la historia del cine.",
            },
            {
              usuario: "BatmanLover",
              mensaje:
                "La relación entre Batman y el Joker en esta película es fascinante.",
            },
            {
              usuario: "CineCrítico",
              mensaje:
                "El guion y la dirección de Nolan hicieron que esta película se sintiera tan realista y oscura.",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.cargarContenido(); // Llamamos a la función para cargar el contenido
  },
  methods: {
    cargarContenido() {
      setTimeout(() => {
        this.loading = false; // ocultamos el loader y mostramos el contenido
      }, 300); // aseguramos que cargue
    },
    alternarAcordeon(indice) {
      this.elementosForo[indice].estaAbierto =
        !this.elementosForo[indice].estaAbierto;
    },
  },
};
</script>

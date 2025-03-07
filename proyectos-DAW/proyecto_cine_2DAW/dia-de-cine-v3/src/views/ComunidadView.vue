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
        class="contenido-mostrar flex"
        v-show="!loading"
      >
        <div class="accordion w-full max-w-3xl">
          <div class="accordion-item" v-for="(item, index) in forumItems" :key="index">
            <div class="accordion-header flex justify-between items-center p-4 bg-gray-100 cursor-pointer" @click="toggleAccordion(index)">
              <div>
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
              <button class="text-blue-500 hover:text-blue-700">
                {{ item.isOpen ? 'Ver menos' : 'Ver más' }}
              </button>
            </div>
            <div class="accordion-content p-4 bg-white" v-if="item.isOpen">
              <div v-for="(comment, commentIndex) in item.comments" :key="commentIndex" class="mb-4">
                <p class="font-semibold">{{ comment.user }}</p>
                <p>{{ comment.message }}</p>
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
      forumItems: [
        {
          title: "Stranger Things",
          description: "Discusión sobre la última temporada y teorías para la próxima",
          isOpen: false,
          comments: [
            { user: "Eleven11", message: "¡No puedo creer ese final! ¿Alguien tiene teorías sobre lo que pasará en la próxima temporada?" },
            { user: "WillTheWise", message: "Creo que veremos más del Upside Down y cómo afecta al mundo real." },
          ]
        },
        {
          title: "El Padrino",
          description: "Análisis de los personajes y su evolución a lo largo de la trilogía",
          isOpen: false,
          comments: [
            { user: "Corleone_Fan", message: "La transformación de Michael de héroe de guerra a jefe de la mafia es simplemente magistral." },
            { user: "CinemaExpert", message: "El contraste entre Vito y Michael Corleone es uno de los aspectos más interesantes de la saga." },
          ]
        },
        {
          title: "Breaking Bad",
          description: "Debate sobre las decisiones morales de Walter White",
          isOpen: false,
          comments: [
            { user: "Heisenberg", message: "Walter White es un personaje fascinante. ¿Creen que sus acciones estaban justificadas?" },
            { user: "JessePinkman", message: "Yo, Mr. White empezó con buenas intenciones, pero se dejó llevar por el poder, ¿sabes?" },
          ]
        }
      ]
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
    toggleAccordion(index) {
      this.forumItems[index].isOpen = !this.forumItems[index].isOpen;
    }
  },
};
</script>

<style scoped>
.accordion-item {
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.accordion-header {
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #e2e8f0;
}

.accordion-content {
  border-top: 1px solid #e2e8f0;
}
</style>
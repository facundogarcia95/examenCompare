<template>
  <div class="container mt-5">
    <h1>Detalles del Registro</h1>
    <div v-if="registro">
      <div class="card">
        <div class="card-header">
          Registro ID: {{ registro.id }}
        </div>
        <div class="card-body">
          <h5 class="card-title">Nombre: {{ registro.nombre }}</h5>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando detalles del registro...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerRegistro',
  data() {
    return {
      registro: null,
      id: this.$route.params.id 
    };
  },
  mounted() {
    axios.get(`http://localhost:8000/api/tabla/${this.id}`)
      .then(response => {
        this.registro = response.data; 
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }
}
</script>

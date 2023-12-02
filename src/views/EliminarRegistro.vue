<template>
  <div class="container mt-5">
    <h1>Eliminar Registro</h1>
    <div v-if="registro">
      <div class="card">
        <div class="card-header">
          Estás a punto de eliminar el registro ID: {{ registro.id }}
        </div>
        <div class="card-body">
          <h5 class="card-title">Nombre: {{ registro.nombre }}</h5>
          <button class="btn btn-danger" @click="eliminarRegistro">Eliminar</button>
          <router-link to="/ruta-a-listado" class="btn btn-secondary">Cancelar</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando datos del registro...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EliminarRegistro',
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
  },
  methods: {
    eliminarRegistro() {
      axios.delete(`http://localhost:8000/examen/api/tabla/${this.id}`)
        .then(() => {
          alert('Registro eliminado con éxito');
          this.$router.push('/listado');
        })
        .catch(error => {
          console.error('Hubo un error al eliminar el registro:', error);
        });
    }
  }
}
</script>

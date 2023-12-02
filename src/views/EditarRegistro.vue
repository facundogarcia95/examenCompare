<template>
  <div class="container mt-5">
    <h1>Editar Registro</h1>
    <form v-if="registro" @submit.prevent="editarRegistro">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="registro.nombre" required>
      </div>
      <button type="submit" class="btn btn-success">Actualizar</button>
    </form>
    <div v-else>
      <p>Cargando datos del registro...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditarRegistro',
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
    editarRegistro() {
      axios.put(`http://localhost:8000/api/tabla/${this.id}`, this.registro)
        .then(() => {
          alert('Registro actualizado con éxito');
          this.$router.push('/listado');
        })
        .catch(error => {
          console.error('Hubo un error al actualizar el registro:', error);
        });
    }
  }
}
</script>

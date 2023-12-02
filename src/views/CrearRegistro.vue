<template>
  <div class="container mt-5">
    <h1>Crear Nuevo Registro</h1>
    <form @submit.prevent="crearRegistro">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="nuevoRegistro.nombre" required>
      </div>
      <button type="submit" class="btn btn-primary">Crear</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CrearRegistro',
  data() {
    return {
      nuevoRegistro: {
        nombre: ''
      }
    };
  },
  methods: {
    crearRegistro() {
      axios.post('http://localhost:8000/api/tabla', this.nuevoRegistro)
        .then(() => {
          alert('Registro creado con éxito');
          this.$router.push('/listado');
        })
        .catch(error => {
          console.error('Hubo un error al crear el registro:', error);
        });
    }
  }
}
</script>

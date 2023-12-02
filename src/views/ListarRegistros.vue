<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h1 class="card-title">Listado de Registros</h1>
            <router-link :to="{ name: 'crear' }" class="btn btn-primary float-right">Crear Nuevo Registro</router-link>
          </div>
          <div class="card-body">
            <table class="table table-bordered table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="registro in registros" :key="registro.id">
                  <td>{{ registro.id }}</td>
                  <td>{{ registro.nombre }}</td>
                  <td>
                    <router-link :to="{ name: 'ver', params: { id: registro.id } }" class="btn btn-info btn-sm mr-1">
                      <i class="fas fa-eye"></i>
                    </router-link>
                    <router-link :to="{ name: 'editar', params: { id: registro.id } }" class="btn btn-warning btn-sm mr-1">
                      <i class="fas fa-edit"></i>
                    </router-link>
                    <router-link :to="{ name: 'eliminar', params: { id: registro.id } }" class="btn btn-danger btn-sm">
                      <i class="fas fa-trash-alt"></i>
                    </router-link>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListarRegistros',
  data() {
    return {
      registros: []
    };
  },
  mounted() {
    axios.get('http://localhost:8000/api/tabla')
      .then(response => {
        this.registros = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  },
  methods: {
  }
}
</script>

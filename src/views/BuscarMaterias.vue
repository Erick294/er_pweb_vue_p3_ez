<template>
   <div>
    <div id="divpag">
      <fieldset>
        <legend>Buscar Materias</legend>
      </fieldset>
      <div>
        <button @click="buscarTodas" class="btn btn-outline-info">BUSCAR</button>
      </div>

      <div>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Número creditos</th>
              <th scope="col">Ver</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lista" v-bind:key="item">
              <th scope="row">{{ item.codigo }}</th>
              <td class="table-info">{{item.nombre}}</td>
              <td class="table-info">{{item.numCreditos}}</td>
              <td class="table-info"><button @click="buscarMateria(item.id)">Ver</button></td>
              <td class="table-info"><button @click="borrar(item.id)">Borrar</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <div class="componente2">
        <div class="input-group mb-3">
        <span class="input-group-text" id="codigo">Código:   {{ codigo }} </span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="profesor">Profesor:   {{ profesor }}</span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="numCreditos">Número de créditos:   {{ numCreditos }}</span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="nombre">Nombre de la materia:   {{ nombre }}</span>
      </div>
    </div>

    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
  </div>
</template>

<script>
import {buscarMateriaIdFachada, buscarTodasMateriasFachada, eliminarMateriaFachada} from '../js/procesarMaterias.js'

export default {
    data(){
        return{
            codigo: null,
            profesor: null,
            numCreditos: null,
            nombre:null,
            mensaje:"",
            lista: []
        }
    },
    methods:{
        async buscarTodas(){
            const data = await buscarTodasMateriasFachada() 
            this.lista = data
            console.log(this.lista)
            return this.lista
        },
        borrar(id){
            const response = eliminarMateriaFachada(id)

            if(response != null){
                this.mensaje = "Eliminado correctamente"
            }else{
                this.mensaje = "Ocurrio un error"
            }
        },
        async buscarMateria(id){
            const data = await buscarMateriaIdFachada(id)
            this.codigo = data.codigo
            this.profesor = data.profesor
            this.numCreditos = data.numCreditos
            this.nombre = data.nombre

            console.log(data)
        }
    }
}
</script>

<style>

table{
    margin-top: 20px;
    text-align: center;
    margin-left: 535px;
}

.componente2{
    margin-top: 50px;
    font-family: 'Courier New', Courier, monospace;;
}

input-group mb-3 span{
    margin-top: 25px;
    padding: 15px;
}

.table th{
  padding: 10px;
}

.alert{
  margin-top: 25px;
  background-color: aquamarine;
  padding: 15px;
  width: fit-content;
  text-align: center;
  margin-left: 625px;

}

button {
  background-color:darkcyan;
  font-family: 'Courier New', Courier, monospace;
  color: white;
}

</style>
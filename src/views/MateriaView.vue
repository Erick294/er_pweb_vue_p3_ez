<template>
    <div>
  <fieldset>
    <legend>Ingresar Materia</legend>

    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" id="codigo">Código: </span>
        <input type="text" class="form-control" v-model="codigo" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="profesor">Profesor: </span>
        <input type="text" class="form-control" v-model="profesor" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="numCreditos">Número de créditos: </span>
        <input type="text" class="form-control" v-model="numCreditos" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="nombre">Nombre de la materia: </span>
        <input type="text" class="form-control" v-model="nombre" required />
      </div>

      <div>
        <button class="btn btn-outline-info" type="button" @click="registrarMateria">REGISTRAR</button>
      </div>
    </form>
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
  </fieldset>
  </div>

</template>

<script>
import {insertarMateriaFachada} from '../js/procesarMaterias.js'

export default {
    data(){
        return{
            codigo: null,
            profesor: null,
            numCreditos: null,
            nombre:null,
            mensaje: ""
        }
    },
    methods:{
        registrarMateria(){
            const materia={
                codigo: this.codigo,
                profesor: this.profesor,
                numCreditos: this.numCreditos,
                nombre: this.nombre
            }

            const response = insertarMateriaFachada(materia)

            if(response != null){
                this.mensaje = "Ingresado correctamente"
                this.codigo = null
                this.profesor = null
                this.numCreditos = null
                this.nombre = null
            }else{
                this.mensaje = "Ocurrio un error"
            }

        }
    }
}
</script>

<style scoped>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}

input-group mb-3 span, input{
  margin: auto;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  align-content: center;
  display: block;
  
}

form{
    width: 400px;
}

button {
  margin-top: 25px;
  background-color:darkcyan;
  font-family: 'Courier New', Courier, monospace;
  color: white;
}

.alert{
  margin-top: 25px;
  background-color: aquamarine;
  padding: 15px;
  width: fit-content;
  text-align: center;
  margin-left: 95px;

}
</style>
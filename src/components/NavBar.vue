<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #72f27f;">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarText">
            <router-link class="nav-link active text-dark" aria-current="page" to="/materia/ingresar">IngresarMateria</router-link> 
            <router-link class="nav-link active text-dark" aria-current="page" to="/materia/buscar">BuscarMaterias</router-link> 
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>

  .nav-link{
    padding-left: 15px;
    padding-right: 5px;
  }

  </style>
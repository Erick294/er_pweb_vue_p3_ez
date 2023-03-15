import axios from "axios"

//CRUD
const insertarMateria = (body) =>{
    axios.post(`http://localhost:8081/API/Matricula/V1/materias`, body).then(r=>r.data)
}

const actualizarMateria = (id, body) =>{
    axios.put(`http://localhost:8081/API/Matricula/V1/materias/${id}`, body).then(r=>r.data)
}

const buscarMateriaId = (id) =>{
    const data = axios.get(`http://localhost:8081/API/Matricula/V1/materias/${id}`).then(r=>r.data)
    return data
}

const buscarTodasMaterias = () =>{
    const data = axios.get(`http://localhost:8081/API/Matricula/V1/materias`).then(r=>r.data)
    return data;
}

const eliminarMateria =(id) =>{
    axios.delete(`http://localhost:8081/API/Matricula/V1/materias/${id}`).then(r=>r.data)
}

//Fachadas

export const insertarMateriaFachada = async (body) =>{
    await insertarMateria(body)
}

export const actualizarMateriaFachada = async (id,body) =>{
    await actualizarMateria(id,body)
}

export const buscarMateriaIdFachada = async (id) =>{
    return await buscarMateriaId(id)
}

export const buscarTodasMateriasFachada = async () =>{
    return await buscarTodasMaterias()
}

export const eliminarMateriaFachada = async (id) =>{
    await eliminarMateria(id)
}
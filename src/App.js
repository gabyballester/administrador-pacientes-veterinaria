//Importamos react y component
import React, { Component } from "react";
//Importamos el bootstrap de nuestro estilo personalizado
import "./assets/css/bootstrap.min.css";

//Importamos componentes
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import AppointmentsList from "./components/AppointmentsList";

//Creamos la clase que extiende de component
class App extends Component {
  //Creamos el state vacío por ahora
  state = {
    appointments: [], //declaramos array de appointments vacío
  };

  //función que toma data y lo pasamos así al componente de nueva cita
  createNewAppointment = (data) => {
    /** 1. hacemos spread para hacer copia el estate actual de appointments
     *  2. agregamos lo que haya en data */
    const appointments = [...this.state.appointments, data];
    //agregar el nuevo state
    this.setState({
      //objeto del store y objeto que le llega
      appointments,
      //al llamarse igual podemos dejar appointments a secas
      //pero podría ser appointments:appointments
    });
  };

  // elimina las citas del state
  deleteAppontment = id => {
    // tomar una copia del state.appointments
    const currentAppointments = [...this.state.appointments];
    // utilizar filter para sacar el elemento @id del arreglo
    // Dejará solamente los que no coincidan con id
    const appointments = currentAppointments.filter(cita => cita.id !== id)

    // actualizar el state
    this.setState({
      appointments // podríamos poner appointments:appointments 
    })
  };

  render() {
    return (
      //El container de momento vacío
      <div className="container">
        {/* Agregamos header y titulo */}
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              //nombre función igual al nombre del prop
              createNewAppointment={this.createNewAppointment}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsList
              // Pasamos estados o funciones a componente hijo
              appointments={this.state.appointments}
              deleteAppontment={this.deleteAppontment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App; //exportamos App

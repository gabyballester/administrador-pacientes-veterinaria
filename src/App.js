//Importamos react y component
import React, { Component } from "react";
//Importamos el bootstrap de nuestro estilo personalizado
import "./assets/css/bootstrap.min.css";
import Header from "./components/Header"; //Importamos header
import NewAppointment from "./components/NewAppointment"; //importamos NewAppointment

//Creamos la clase que extiende de component
class App extends Component {
  //Creamos el state vacío por ahora
  state = {};

    //función que toma datos y lo pasamos así al componente de nueva cita
    createNewAppointment = info => {
      console.log(info); //muestro lo que le llega por las props
    }

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
        </div>
      </div>
    );
  }
}

export default App; //exportamos App

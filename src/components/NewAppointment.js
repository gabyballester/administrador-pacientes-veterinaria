import React, { Component } from "react"; //importamos react y component
import PropTypes from 'prop-types'; //importamos
const { uuid } = require('uuidv4');


//creamos state inicial
const stateDefault = {
  //creamos state
  appointment: {
    //creamos objeto cita y las propiedades vacías que vamos a usar
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  },
  error: false //por defecto sin errores
};

//creamos clase para nueva cita
class NewAppointment extends Component {

  //aplicamos spread a ese stateDefault que crea una copia de este
  state = { ...stateDefault }; //cuando se crea lo recupera vacío

  // Cuando el usuario escribe en los inputs
  handleChange = (e) => {
    this.setState({
      appointment: {
        // con el spread: creamos una copia del state y sólo afecta al campo en que escribo
        ...this.state.appointment,
        [e.target.name]: e.target.value,
      },
    });
  };

  // cuando el usuario envia el formulario
  handleSubmit = (e) => {
    e.preventDefault();

    // extraer los valores del state con descructuring y desde el state.appointment
    const { pet, owner, date, time, symptoms } = this.state.appointment;

    // validar que todos los campos esten llenos
    if (pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
      this.setState({
        error: true //si hay error que lo guarde en store
      });

      // detener la ejecución si hay error
      return;
    };

    // generar objeto con los datos
    /** 1. Creamos constante nueva cita
     *  2. descomponemos el objeto appointment que genera una copia */
    const newAppointment = { ...this.state.appointment };
    //agregamos nueva propiedad id generada random con la librería instalada
    newAppointment.id = uuid();

    // Agregar la cita al state de App
    /** llamamos a la función que está en props
     * y recoge los datos de la nueva cita generados arriba */
    this.props.createNewAppointment(newAppointment);

    // Reseteamos el state al state inicial
    this.setState({
      ...stateDefault //recupera una copia vacía del state y lo resetea
    })

  }

  render() {

    //extraemos valor del error del state
    // lo extraemos haciendo destructuring de state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5 pl-4 pr-4">
        <div className="card-12">
          <h2 className="card-title text-center mb-5 ml-4 mr-4">
            Llena el formulario para crear una nueva cita</h2>
          {/* Mostramos error con ternario */}
          {error ?
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div> : null}

          <form onSubmit={this.handleSubmit}>
            {/* Datos mascota */}
            <div className="form-group row mx-auto">
              <label className="col-sm-12 col-md-4 col-lg-3 ml-sm-2 ml-md-4 ml-lg-4 col-form-label">
                Nombre mascota
              </label>
              <div className="p-0 col-sm-12 col-md-7 col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="pet" //nombre de la propiedad
                  onChange={this.handleChange} //evento que llama a función si detecta cambios
                  value={this.state.appointment.pet} //value de campo pet
                />
              </div>
            </div>
            {/* Fin  Datos mascota  */}

            {/* Datos dueño */}
            <div className="form-group row mx-auto">
              <label className="col-sm-12 col-md-4 col-lg-3 ml-sm-2 ml-md-4 ml-lg-4 col-form-label">
                Nombre dueño
              </label>
              <div className="p-0 col-sm-12 col-md-7 col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="owner"
                  onChange={this.handleChange} //evento que llama a función si detecta cambios
                  value={this.state.appointment.owner} //value de campo owner
                />
              </div>
            </div>
            {/* Fin datos dueño  */}

            {/* Fecha y hora cita */}
            <div className="form-group row mx-auto">
              <label className="col-sm-2 ml-sm-2 ml-md-4 ml-lg-4 col-form-label">
                Fecha:
              </label>
              <div className="p-0 col-xs-3 mr-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange} //evento que llama a función si detecta cambios
                  value={this.state.appointment.date} //value de campo date
                />
              </div>

              <label className="col-sm-2 ml-sm-2 ml-md-4 ml-lg-5 col-form-label">
                Hora:
              </label>
              <div className="p-0 col-xs-3">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange} //evento que llama a función si detecta cambios
                  value={this.state.appointment.time} //value de campo time
                />
              </div>
            </div>
            {/* Fin fecha y hora cita */}

            {/* Datos síntomas */}
            <div className="form-group row mx-auto">
              <label className="col-sm-12 col-md-4 col-lg-3 ml-sm-2 ml-md-4 ml-lg-4 col-form-label">
                Síntomas
              </label>
              <div className="p-0 col-sm-12 col-md-7 col-lg-8">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Descripción de síntomas"
                  onChange={this.handleChange} //evento que llama a función si detecta cambios
                  value={this.state.appointment.symptoms} //value de campo symptoms
                />
              </div>
            </div>
            {/* Fin datos síntomas  */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

NewAppointment.propTypes = {
  createNewAppointment : PropTypes.func.isRequired
}

export default NewAppointment;

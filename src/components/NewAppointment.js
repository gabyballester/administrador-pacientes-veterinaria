import React, { Component } from "react"; //importamos react y component

class NewAppointment extends Component {
  //creamos clase para nueva cita
  state = {};
  render() {
    return (
      <div className="card mt-5 py-5 pl-4 pr-4">
        <div className="card-12">
          <h2 className="card-title text-center mb-5 ml-4 mr-4">
            Llena el formulario para crear una nueva cita
          </h2>

          <form>
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
                  name="pet"
                />
              </div>
            </div>
            {/* Fin  Datos mascota  */}

            {/* Datos mascota */}
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
                />
              </div>
            </div>
            {/* Fin datos mascota  */}

            {/* Fecha y hora cita */}
            <div className="form-group row mx-auto">
              <label className="col-sm-2 ml-sm-2 ml-md-4 ml-lg-4 col-form-label">
                Fecha:
              </label>
              <div className="p-0 col-xs-3 mr-lg-4">
                <input type="date" className="form-control" name="date" />
              </div>

              <label className="col-sm-2 ml-sm-2 ml-md-4 ml-lg-5 col-form-label">
                Hora:
              </label>
              <div className="p-0 col-xs-3">
                <input type="time" className="form-control" name="time" />
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
                  name="sintomas"
                  placeholder="Descripción de síntomas"
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

export default NewAppointment;

import React from 'react'; //improtamos react
import PropTypes from 'prop-types'; //importamos

//extraemos appointment
const Appointment = ({ appointment, deleteAppointment }) => (
    <div className="media mt-3">
        <div className="media-body">
            <h5 className="mt-0"><span>id -&gt; </span> {appointment.id}</h5>
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text"><span>Nombre Dueño: </span> {appointment.owner} </p>
            <p className="card-text"><span>Fecha: </span> {appointment.date} </p>
            <p className="card-text"><span>Hora: </span> {appointment.time} </p>
            <p className="card-text"><span>Sintomas: </span> </p>
            <p className="card-text">{appointment.symptoms}</p>

            <button
                className="btn btn-danger"
                onClick={() => deleteAppointment(appointment.id)}
            >Borrar &times;</button>
        </div>
    </div>

);

Appointment.propTypes = { 
    appointment : PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}


export default Appointment;
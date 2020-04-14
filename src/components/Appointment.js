import React from 'react'; //improtamos react

//extraemos appointment
const Appointment = ({ appointment, deleteAppontment }) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text"><span>Nombre Dueño: </span> {appointment.owner} </p>
            <p className="card-text"><span>Fecha: </span> {appointment.date} </p>
            <p className="card-text"><span>Hora: </span> {appointment.time} </p>
            <p className="card-text"><span>Sintomas: </span> </p>
            <p className="card-text">{appointment.symptoms}</p>

            <button
                className="btn btn-danger"
                onClick={() => deleteAppontment(appointment.id)}
            >Borrar &times;</button>
        </div>
    </div>

);

export default Appointment;
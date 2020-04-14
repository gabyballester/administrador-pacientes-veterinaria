import React from "react"; //importamos react
import Appointment from './Appointment';
import PropTypes from 'prop-types'; //importamos

//extraemos appointments y deleteAppointment
const AppointmentsList = ({ appointments, deleteAppointment }) => {

    //Sacar mensaje en base a si hay citas o no
    const message = Object.keys(appointments).length === 0 ?
    'No hay Citas' : 'Administra las citas aquí';

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>

                <div className="lista-citas">
                    {appointments.map(appointment => (
                        <Appointment
                            key={appointment.id}
                            appointment={appointment}
                            deleteAppointment={deleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

AppointmentsList.propTypes = { //tenemos dos propiedades
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentsList;

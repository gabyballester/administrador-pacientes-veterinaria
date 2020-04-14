import React from "react"; //importamos react
import Appointment from './Appointment';

//extraemos appointments y deleteAppointment
const AppointmentsList = ({ appointments, deleteAppontment }) => (


    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Lista de citas</h2>

            <div className="lista-citas">
                {appointments.map(appointment => (
                    <Appointment
                        key={appointment.id}
                        appointment={appointment}
                        deleteAppontment={deleteAppontment}
                    />
                ))}
            </div>
        </div>
    </div>

);


export default AppointmentsList;

import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, removeAppointment }) => (
  <div className="appointment">
    <p>
      Mascota: <span>{appointment.petName}</span>
    </p>
    <p>
      Dueño: <span>{appointment.owner}</span>
    </p>
    <p>
      Fecha: <span>{appointment.date}</span>
    </p>
    <p>
      Hora: <span>{appointment.time}</span>
    </p>
    <p>
      Sintomas: <span>{appointment.symptoms}</span>
    </p>

    <button className="button remove u-full-width" onClick={() => removeAppointment(appointment.id)}>
      Eliminar &times;
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppointment: PropTypes.func.isRequired
}

export default Appointment;

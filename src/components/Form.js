import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Form = ({ createAppointment }) => {
  // Crear state de citas
  const [appointment, setAppointment] = useState({
    petName: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  const { petName, owner, date, time, symptoms } = appointment;

  // Función que se ejecuta
  const updateState = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const submitAppointment = (e) => {
    e.preventDefault();

    // Validar
    if (
      !petName.trim() ||
      !owner.trim() ||
      !date.trim() ||
      !time.trim() ||
      !symptoms.trim()
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje de error
    setError(false);

    // Asignar ID
    appointment.id = uuid();

    // Crear la cita
    createAppointment(appointment);

    // Reiniciar el form
    setAppointment({
      petName: "",
      owner: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alert-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitAppointment}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="petName"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={updateState}
          value={petName}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={updateState}
          value={owner}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />

        <label>Sintomas</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={updateState}
          value={symptoms}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
};

export default Form;

import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  // Ask for appointments to persist them
  let initialAppoinments = JSON.parse(localStorage.getItem("appointments"));
  // Initialize the appointments
  const [appointments, setAppointments] = useState(initialAppoinments ?? []);

  // Use Effect to keep appointments updated within local storage
  useEffect(() => {
    let initialAppoinments = JSON.parse(localStorage.getItem("appointments"));
    localStorage.setItem(
      "appointments",
      JSON.stringify(initialAppoinments ? appointments : [])
    );
  }, [appointments]);

  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  const title =
    appointments.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Aplicación Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

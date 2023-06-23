import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `ФИО: ${name}\nНомер телефона: ${phone}\nEmail адрес: ${email}`;
    alert(message);

    console.log("ФИО:", name);
    console.log("Номер телефона:", phone);
    console.log("Email адрес:", email);

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
      <h1>Форма регистрации пользователя</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">ФИО:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="phone">Номер телефона:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="email">Email адрес:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
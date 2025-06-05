import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message is sent!`);
    setFormData({ name: "", message: "" });
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 w-full"
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
      </form>
    </section>
  );
};

export default Contact;

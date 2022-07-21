import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const HomeContact = () => {
  const [result, showResult] = useState(false);
  const formRef = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_370jsvv',
        'template_fhxdzgw',
        formRef.current,
        'dk31iOpB8usJ-fh2a',
      )
      .then(
        (result) => result.text,
      );
    e.target.reset();
    showResult(true);
  }

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <>
      <form
        id="schedule"
        ref={formRef}
        className="mb-8 flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-2"
        onSubmit={sendEmail}
      >
        <input
          name="full_name"
          type="text"
          placeholder="YOUR NAME"
          required
          className="p-3 m-auto md:m-0"
        />
        <input
          name="phone"
          type="tel"
          placeholder="PHONE"
          required
          className="p-3 m-auto md:m-0"
        />
        <input
          name="email"
          type="email"
          placeholder="YOUR EMAIL"
          required
          className="p-3 m-auto md:m-0"
        />
        <select name="service" className="p-3 m-auto md:m-0">
          <option value="Service Type">Service Type</option>
          <option value="javascript">JavaScript</option>
          <option value="javascript">JavaScript</option>
          <option value="javascript">JavaScript</option>
          <option value="javascript">JavaScript</option>
        </select>
        <button
          type="submit"
          className="c-btn p-3 mb-4 border-solid border-1 border-black text-white md:p-3 bg-black hover:bg-white hover:text-black"
        >
          SUBMIT INFORMATION
        </button>
      </form>
      <div>
        {result && (
          <h2 className="text-xl text-white p-4">
            Your request has been received. We&apos;ll Get back to you within 24
            hours.
          </h2>
        )}
      </div>
    </>
  );
};

export default HomeContact;

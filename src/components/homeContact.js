import React from 'react';

const HomeContact = () => (
  <>
    <form
      id="schedule"
      action=""
      method=""
      className="mb-8 flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-2"
    >
      <input
        name="name"
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
        <option value="---">---</option>
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
  </>
);

export default HomeContact;

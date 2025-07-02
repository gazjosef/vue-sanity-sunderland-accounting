import React from "react";

const Form: React.FC = () => {
  return (
    <form
      action="/action_page.php"
      className="space-y-6 border border-black/20 p-6 rounded-md"
    >
      <div>
        <label htmlFor="fname" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="lname" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email"
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          rows={6}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 text-white py-3 px-6 rounded-md font-semibold uppercase hover:scale-[1.03] transform transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

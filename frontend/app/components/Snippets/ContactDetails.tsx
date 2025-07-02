import { FaPhone } from "react-icons/fa";

export default function ContactDetails(): JSX.Element {
  return (
    <div className="space-y-6 text-sm">
      <div>
        <h3 className="text-lg font-semibold">Address</h3>
        <p>
          5/8 Ave of the Americas
          <br />
          Newington NSW 2127
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Hours</h3>
        <p>
          Sun: Closed <br />
          Mon–Fri: 8:30am – 5:30pm <br />
          Sat: Closed
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Email</h3>
        <p>info@sunderland.com.au</p>
      </div>

      <button className="mt-4 inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-md hover:scale-[1.03] transition">
        <FaPhone /> 02 9644 9220
      </button>
    </div>
  );
}

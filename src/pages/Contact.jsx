import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (demo)");
  };

  return (
    <main className="min-h-screen p-10">
      <div className="glass p-6 rounded-2xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Want to work together? Reach out via the form or use the social links below.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            className="p-3 rounded border bg-white/60 dark:bg-gray-800/60"
          />
          <input
            placeholder="Email"
            className="p-3 rounded border bg-white/60 dark:bg-gray-800/60"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="p-3 rounded border bg-white/60 dark:bg-gray-800/60"
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 transition-transform duration-300 hover:scale-105 rounded bg-gradient-to-r from-[#5301B4] to-[#6E26D8] text-white "
            >
              Send
            </button>
            <a
              href="https://wa.me/628996140092"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded border transition-transform duration-300 hover:scale-105 text-gray-700 dark:text-gray-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-4 ">
          <a href="https://www.behance.net" className="p-3 rounded-full glass transition-transform duration-300 hover:scale-105">
            Behance
          </a>
          <a href="https://dribbble.com" className="p-3 rounded-full glass transition-transform duration-300 hover:scale-105">
            Dribbble
          </a>
          <a href="https://www.instagram.com" className="p-3 rounded-full glass transition-transform duration-300 hover:scale-105">
            Instagram
          </a>
          <a href="mailto:rendi@example.com" className="p-3 rounded-full glass transition-transform duration-300 hover:scale-105">
            Email
          </a>
        </div>

        {/* Map */}
        <div className="mt-6">
          <h4 className="mb-2 text-gray-800 dark:text-gray-200">Location</h4>
          <iframe
            title="map"
            src="https://maps.app.goo.gl/1z4gGssSt6vZY8Dm9"
            className="w-full h-48 rounded"
          />
        </div>
      </div>
    </main>
  );
}

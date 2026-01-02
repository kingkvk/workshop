function ContactForm() {
  // In a real app, you would add an event handler like onSubmit={handleSubmit}
  return (
    <section id="contact" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
      <p className="text-sm text-slate-700 mb-4">
        Have questions about a course? Send us a message.
      </p>

      <form className="flex flex-col gap-3">
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="studentEmail" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="studentEmail"
            name="studentEmail"
            type="email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
          ></textarea>
        </div>

        <button type="submit"
          className="self-start bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
'use client';

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl text-white">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Have a project or question? Reach out and we’ll get back to you promptly.
        </p>
      </div>

      <form
        action="mailto:contact@nexuscorporate.com"
        method="POST"
        encType="text/plain"
        className="mx-auto mt-12 max-w-3xl space-y-6"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-gray-700 bg-brand-light/40 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-700 bg-brand-light/40 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full rounded-md border border-gray-700 bg-brand-light/40 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-6 py-3 text-white font-medium transition hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
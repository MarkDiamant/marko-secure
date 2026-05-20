export default function Home() {
const fencingImages = [
  "/fencing/Fence0.webp",
  "/fencing/Fence1.png",
  "/fencing/Fence2.jpg",
  "/fencing/Fence3.jpg",
  "/fencing/Fence4.jpg",
  "/fencing/Fence5.jpg",
  "/fencing/Fence6.jpg",
  "/fencing/Fence7.webp",
  "/fencing/Fence8.jpg",
];

  return (
    <main className="min-h-screen bg-[#071827] text-white">
      <section className="border-b border-white/10 bg-[#0a2435]">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 bg-[#0a2435] px-4 pb-5 pt-4 md:px-6 md:pb-6 md:pt-6">
          <div className="flex items-end">
            <img
              src="/logo.jpeg"
              alt="Marko Secure"
              className="h-36 w-auto object-contain md:h-48"
            />
          </div>

          <a
            href="#contact"
            className="mb-1 shrink-0 self-end whitespace-nowrap rounded-full bg-cyan-400 px-4 py-3 text-center text-xs font-semibold leading-none text-black transition hover:bg-cyan-300 md:mb-2 md:px-5 md:text-sm"
          >
            Request Quote
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
        <div className="max-w-3xl">
          <p className="text-cyan-300 font-medium mb-4">
            Domestic and commercial wooden fencing
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-7xl">
            Secure fencing for homes, sites and developments.
          </h2>

          <p className="mt-8 text-lg text-white/70 leading-8">
            From garden fence replacements to larger boundary fencing projects,
            we keep things simple, secure and properly finished.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Request A Quote
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              WhatsApp Photos For A Quote
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fencingImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={image}
                alt="Fencing"
                className="h-80 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-cyan-300 font-medium mb-4">What we do</p>

              <h3 className="text-4xl font-bold">
                Wooden fencing for private homes and larger sites.
              </h3>

              <div className="mt-10 grid grid-cols-1 gap-4 text-lg text-white/80">
                <div>• Fence replacement</div>
                <div>• Wooden fencing</div>
                <div>• Concrete post fencing</div>
                <div>• Feather edge fencing</div>
                <div>• Slatted fencing</div>
                <div>• Gates</div>
                <div>• Garden privacy fencing</div>
                <div>• Site and development fencing</div>
                <div>• Boundary fencing</div>
                <div>• Fence repairs</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0c2235] p-8">
              <p className="text-cyan-300 font-medium mb-4">
                Fast estimates
              </p>

              <h3 className="text-3xl font-bold leading-tight">
                Send us photos of the area for a quick quote.
              </h3>

              <p className="mt-6 text-white/70 leading-7">
                WhatsApp photos, videos and rough measurements and we’ll come
                back to you with a fast estimate.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  WhatsApp Number Coming Soon
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Phone Number Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-24"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-cyan-300 font-medium mb-4">Request a quote</p>

          <h3 className="text-4xl font-bold">
            Tell us about your fencing project.
          </h3>

          <form className="mt-10 grid gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-[#071827] px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="rounded-2xl border border-white/10 bg-[#071827] px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="rounded-2xl border border-white/10 bg-[#071827] px-5 py-4 outline-none"
            />

            <textarea
              placeholder="Tell us about the work needed"
              rows={5}
              className="rounded-2xl border border-white/10 bg-[#071827] px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 Marko a trading name of Avark Group Ltd
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <div>info@markosecure.com</div>
            <div>Serving homes, sites & developments</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
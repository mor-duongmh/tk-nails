export default function InquiryForm() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest p-12 rounded-xl editorial-shadow">
      <h2 className="font-headline text-3xl mb-12">Inquiry Form</h2>
      <form className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <input
              className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent"
              id="name"
              placeholder=" "
              type="text"
            />
            <label
              className="absolute left-0 -top-4 text-xs font-label uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary"
              htmlFor="name"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent"
              id="email"
              placeholder=" "
              type="email"
            />
            <label
              className="absolute left-0 -top-4 text-xs font-label uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
        </div>
        <div className="relative">
          <select
            className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary transition-colors text-on-surface-variant"
            id="service"
            defaultValue=""
          >
            <option disabled value="">
              Select Service Interest
            </option>
            <option>Signature Manicure</option>
            <option>Editorial Nail Art</option>
            <option>Structure Gel</option>
            <option>Atelier Spa Pedicure</option>
          </select>
          <label
            className="absolute left-0 -top-4 text-xs font-label uppercase tracking-widest text-on-surface-variant"
            htmlFor="service"
          >
            Interested Service
          </label>
        </div>
        <div className="relative">
          <textarea
            className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent resize-none"
            id="message"
            placeholder=" "
            rows={4}
          ></textarea>
          <label
            className="absolute left-0 -top-4 text-xs font-label uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary"
            htmlFor="message"
          >
            Message
          </label>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-primary text-on-primary px-12 py-4 rounded-full font-label tracking-widest uppercase text-sm hover:opacity-90 transition-all flex items-center gap-3"
            type="submit"
          >
            Send Inquiry
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

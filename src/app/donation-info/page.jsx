export default function DonationInfoPage() {
  return (
    <div className="w-full bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase md:text-xs">
            Support Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral tracking-tight mt-4">
            Make a Donation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-neutral/70 md:text-lg">
            Your contribution directly funds youth programs, mentorship initiatives, and community projects across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-base-200 rounded-[2.5rem] p-8 md:p-10 text-center border border-neutral/5 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-neutral mb-2">Supporter</h3>
            <p className="text-4xl font-extrabold text-primary mb-4">৳500</p>
            <p className="text-sm text-neutral/70 mb-6">Provides learning materials for one youth participant.</p>
            <a href="https://forms.gle/j11RnDdtBDZ8PyZq5" target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-full px-8 w-full">
              Donate ৳500
            </a>
          </div>

          <div className="bg-base-200 rounded-[2.5rem] p-8 md:p-10 text-center border border-neutral/5 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-neutral mb-2">Champion</h3>
            <p className="text-4xl font-extrabold text-primary mb-4">৳2,000</p>
            <p className="text-sm text-neutral/70 mb-6">Funds a full mentorship workshop for a community group.</p>
            <a href="https://forms.gle/j11RnDdtBDZ8PyZq5" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full px-8 w-full">
              Donate ৳2,000
            </a>
          </div>

          <div className="bg-base-200 rounded-[2.5rem] p-8 md:p-10 text-center border border-neutral/5 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-neutral mb-2">Visionary</h3>
            <p className="text-4xl font-extrabold text-primary mb-4">৳10,000</p>
            <p className="text-sm text-neutral/70 mb-6">Sponsors a long-term youth leadership program.</p>
            <a href="https://forms.gle/j11RnDdtBDZ8PyZq5" target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-full px-8 w-full">
              Donate ৳10,000
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-neutral/60">
            Need a custom sponsorship or corporate partnership?{" "}
            <a href="mailto:org.neville@gmail.com" className="text-primary font-semibold hover:underline">
              Email us
            </a>{" "}
            to discuss.
          </p>
        </div>
      </div>
    </div>
  );
}

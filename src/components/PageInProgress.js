export default function PageInProgress() {
  return (
    <section className="flex justify-center px-4 py-12">
      <div className="relative max-w-3xl w-full overflow-hidden rounded-3xl border-gray-100/80 backdrop-blur-xl p-8 text-center shadow-2xl">

        {/* Animated top border */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" />

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-pink-500/30 bg-fuchsia-300/10 px-4 py-1 text-sm font-medium text-pink-400">
          Work in Progress
        </span>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-bold text-gray-300 md:text-4xl">
          This Page Is Coming Soon
        </h1>

        {/* Description */}
        <div className="mt-5 space-y-3">
          <p className="text-lg text-slate-300">
            We're currently building something exciting for you.
          </p>

          <p className="text-slate-400">
            Our team is working to deliver a better experience with new
            features and improvements.
          </p>

          <p className="font-medium text-red-300 animate-pulse">
            Meanwhile, enjoy exploring our Home Page and stay tuned for
            upcoming updates!
          </p>
        </div>

        {/* Bottom animation */}
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/3 animate-[bounce_2s_infinite] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </div>
      </div>
    </section>
  );
}
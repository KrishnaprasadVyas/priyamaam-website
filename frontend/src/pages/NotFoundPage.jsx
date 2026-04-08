import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      <SEO
        title="Page not found | Dr. Priya Surana"
        description="The requested page could not be found. Return to the Dr. Priya Surana homepage or explore the available sections."
        path="/404"
        noIndex
      />
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          The page you are looking for does not exist. Use the navigation to
          return to Dr. Priya Surana&apos;s homepage or contact section.
        </p>
      </div>
    </section>
  );
}

export default NotFoundPage;

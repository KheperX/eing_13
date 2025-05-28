export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center space-y-8">
        <h1 className="text-8xl font-thin japanese-heading tracking-tight text-neutral-900">
          404
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-light japanese-heading">
            Page Not Found
          </h2>
          <p className="text-neutral-600 font-light">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <div className="pt-8">
          <a 
            href="/"
            className="btn-minimal px-8 py-3 bg-transparent text-neutral-900 inline-block"
          >
            BACK TO HOME
          </a>
        </div>
      </div>
    </div>
  )
}

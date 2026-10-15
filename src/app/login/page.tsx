import { login } from './actions'

export const metadata = {
  title: 'Masuk — Vylogix CRM & Client Portal',
  description: 'Masuk ke portal Vylogix Studio untuk mengelola proyek dan melihat laporan perkembangan.',
}

/**
 * LoginPage renders a clean, full-screen portal access form.
 *
 * Authentication flow:
 *   1. User submits email + password via a Server Action form.
 *   2. `login()` server action authenticates with Supabase, reads the role
 *      from the `profiles` table, and redirects to the correct dashboard.
 *   3. If already authenticated, the middleware intercepts and redirects
 *      before this page component is ever rendered.
 */
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const resolvedParams = await searchParams
  const errorMessage = resolvedParams?.message

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 py-8 sm:py-12">
      {/* ── Brand Header ── */}
      <div className="mb-6 text-center select-none">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 shadow-lg shadow-teal-500/20 mb-4">
          {/* User Smile Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-white"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Client <span className="text-teal-500">Portal</span>
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Pantau proyek dan tagihan Anda dengan mudah.
        </p>
      </div>

      {/* ── Container with Fast Account Switcher & Login Form ── */}
      <div className="w-full max-w-4xl flex flex-col items-center">

        {/* ── Card ── */}
        <div className="w-full max-w-sm bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
          <form action={login} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="login-email"
              className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 ml-1"
            >
              Email Anda
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="klien@perusahaan.com"
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border-none text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all duration-150"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="login-password"
              className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 ml-1"
            >
              Kata Sandi
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••••"
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border-none text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all duration-150"
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 bg-red-50 text-red-600 text-sm p-3.5 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mt-0.5 shrink-0 text-red-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{decodeURIComponent(errorMessage)}</span>
            </div>
          )}

            {/* Submit */}
            <button
              id="login-submit-button"
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold py-3.5 rounded-2xl transition-all duration-150 shadow-lg shadow-teal-500/30 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            >
              Masuk Sekarang
            </button>
          </form>
        </div>
      </div>

      {/* ── Footer ── */}
      <p className="mt-8 text-xs text-slate-400 text-center">
        &copy; {new Date().getFullYear()} Vylogix Studio. Client Access.
      </p>
    </div>
  )
}


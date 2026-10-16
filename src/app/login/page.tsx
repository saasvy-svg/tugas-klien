import { login } from './actions'
import LoginForm from './LoginForm'

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
          <LoginForm loginAction={login} errorMessage={errorMessage} />
        </div>
      </div>

      {/* ── Footer ── */}
      <p className="mt-8 text-xs text-slate-400 text-center">
        &copy; {new Date().getFullYear()} Vylogix Studio. Client Access.
      </p>
    </div>
  )
}


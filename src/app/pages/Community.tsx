import { useState } from "react";
import { useNavigate } from "react-router";
import { Users, CheckCircle, ArrowRight, Mail, User, Briefcase, Zap, Heart, Link as LinkIcon, ChevronRight } from "lucide-react";

type Step = "landing" | "registration" | "account-created" | "email-verification" | "profile-setup" | "complete";

const STEPS = [
  { id: "registration", label: "Registration" },
  { id: "account-created", label: "Account Creation" },
  { id: "email-verification", label: "Email Verification" },
  { id: "profile-setup", label: "Profile Setup" },
  { id: "complete", label: "Dashboard Access" },
];

const STEP_ORDER: Step[] = ["landing", "registration", "account-created", "email-verification", "profile-setup", "complete"];

function StepIndicator({ current }: { current: Step }) {
  const activeIdx = STEPS.findIndex((s) => s.id === current);
  return (
    <div className="flex items-center gap-2 mb-10">
      {STEPS.map((step, i) => {
        const done = i < activeIdx;
        const active = i === activeIdx;
        return (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                done
                  ? "bg-slate-800 text-white"
                  : active
                  ? "bg-slate-900 text-white ring-4 ring-slate-200"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {done ? <CheckCircle className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs hidden sm:block ${active ? "text-slate-900 font-medium" : done ? "text-slate-600" : "text-gray-400"}`}>
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-300 mx-1" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function LandingStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-2xl mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Join The Creative<br />Soho Community
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Connect with designers, directors, photographers, and creative professionals shaping culture in London and beyond.
        </p>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors"
        >
          Join Community <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {[
          { value: "2,400+", label: "Members" },
          { value: "180+", label: "Events per year" },
          { value: "95%", label: "Satisfaction rate" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: <Users className="w-5 h-5" />, title: "Peer Networking", desc: "Find collaborators, creative partners, and lifelong friends across disciplines." },
          { icon: <Zap className="w-5 h-5" />, title: "Exclusive Events", desc: "Member-only workshops, studio tours, and industry meetups in Soho." },
          { icon: <Briefcase className="w-5 h-5" />, title: "Opportunities Board", desc: "Access curated freelance gigs, studio openings, and creative briefs." },
          { icon: <Heart className="w-5 h-5" />, title: "Mentorship Circles", desc: "Give and receive guidance from creatives at every stage of their career." },
        ].map((b) => (
          <div key={b.title} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 text-slate-700">
              {b.icon}
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-sm mb-1">{b.title}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegistrationStep({ onNext }: { onNext: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    onNext();
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <StepIndicator current="registration" />
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Create your account</h2>
      <p className="text-gray-500 mb-8 text-sm">Start your creative community membership.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Alex Johnson"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="alex@studio.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          Create Account <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

function AccountCreatedStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <StepIndicator current="account-created" />
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Account created!</h2>
      <p className="text-gray-500 text-sm mb-8">
        We've sent a verification email to your inbox. Check your email and click the link to continue.
      </p>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-left mb-8">
        <div className="flex items-center gap-3 text-sm text-slate-700">
          <Mail className="w-5 h-5 text-slate-400 shrink-0" />
          <span>A verification link has been sent to <strong>alex@studio.com</strong></span>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
      >
        I've verified my email <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-gray-400 mt-4">Didn't receive it? <button className="underline hover:text-slate-700">Resend email</button></p>
    </div>
  );
}

function EmailVerificationStep({ onNext }: { onNext: () => void }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  function handleChange(i: number, val: string) {
    if (val.length > 1) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus();
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <StepIndicator current="email-verification" />
      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Mail className="w-8 h-8 text-slate-700" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Verify your email</h2>
      <p className="text-gray-500 text-sm mb-8">Enter the 6-digit code we sent to your email address.</p>
      <div className="flex gap-3 justify-center mb-8">
        {code.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-slate-900 transition-colors"
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
      >
        Verify & Continue <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-gray-400 mt-4">Didn't receive a code? <button className="underline hover:text-slate-700">Resend</button></p>
    </div>
  );
}

const SKILL_OPTIONS = ["Branding", "Photography", "Motion", "UX Design", "Illustration", "Film", "Typography", "Art Direction", "Copywriting", "3D / CGI"];
const INTEREST_OPTIONS = ["Networking", "Mentorship", "Collabs", "Workshops", "Job Board", "Studio Tours", "Talks & Panels", "Portfolio Reviews"];

function ProfileSetupStep({ onNext }: { onNext: () => void }) {
  const [profession, setProfession] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState("");

  function toggleSet(arr: string[], val: string, setter: (v: string[]) => void) {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <StepIndicator current="profile-setup" />
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Set up your profile</h2>
      <p className="text-gray-500 text-sm mb-8">Help the community get to know you.</p>

      <div className="space-y-6">
        {/* Profession */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Profession</label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g. Creative Director, Photographer..."
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Skills</label>
          <div className="flex flex-wrap gap-2">
            {SKILL_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => toggleSet(skills, s, setSkills)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  skills.includes(s)
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => toggleSet(interests, s, setInterests)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  interests.includes(s)
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Portfolio links</label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="url"
              placeholder="https://yourportfolio.com"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Behance, Dribbble, personal site, Instagram, etc.</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full mt-8 bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
      >
        Complete Profile <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function CompleteStep() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <div className="w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-8">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Welcome to the community!</h2>
      <p className="text-gray-500 text-sm mb-10 leading-relaxed">
        You're now part of The Creative Soho. Your dashboard is ready — explore events, connect with members, and make your mark.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { value: "2,400+", label: "Members" },
          { value: "12", label: "Events this month" },
          { value: "180+", label: "Opportunities" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-50 rounded-xl p-4">
            <div className="text-xl font-bold text-slate-900">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
      >
        Go to Dashboard <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function Community() {
  const [step, setStep] = useState<Step>("landing");

  function next() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {step !== "landing" && (
        <div className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">
                Step {STEP_ORDER.indexOf(step)} of {STEP_ORDER.length - 1}
              </span>
              <span className="text-xs text-gray-400">
                {Math.round(((STEP_ORDER.indexOf(step)) / (STEP_ORDER.length - 1)) * 100)}% complete
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-500"
                style={{ width: `${((STEP_ORDER.indexOf(step)) / (STEP_ORDER.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {step === "landing" && <LandingStep onNext={next} />}
      {step === "registration" && <RegistrationStep onNext={next} />}
      {step === "account-created" && <AccountCreatedStep onNext={next} />}
      {step === "email-verification" && <EmailVerificationStep onNext={next} />}
      {step === "profile-setup" && <ProfileSetupStep onNext={next} />}
      {step === "complete" && <CompleteStep />}
    </div>
  );
}

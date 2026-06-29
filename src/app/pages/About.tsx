import { Target, Eye, Compass } from "lucide-react";

export function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4 font-medium">About Us</p>
          <h1 className="text-5xl font-bold leading-tight mb-8">The Creative Soho</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            A platform designed to bridge the gap between creative talent and commercial opportunity.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The platform connects students, emerging creatives, mid-level professionals, agencies, corporates, and industry leaders through curated events, mentorship, industry access, and talent development initiatives.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
            {[
              { value: "Students", label: "Early-stage talent" },
              { value: "Emerging", label: "Rising creatives" },
              { value: "Agencies", label: "Industry partners" },
              { value: "Leaders", label: "Mentors & executives" },
            ].map((item) => (
              <div key={item.value} className="text-center">
                <div className="text-sm font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Purpose */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex gap-5 items-start bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
            <Target className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Brand Purpose</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              To create meaningful pathways between creative talent and industry opportunity.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Creative Soho exists to ensure that talented creatives have access to the networks, mentorship, knowledge, and opportunities required to build sustainable careers within the creative economy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Vision</p>
            <p className="text-white leading-relaxed">
              To become Africa's leading creative talent and industry connection platform, empowering the next generation of creative professionals through access, mentorship, and opportunity.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-5">
              <Compass className="w-5 h-5 text-slate-700" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Mission</p>
            <p className="text-gray-700 leading-relaxed">
              To bridge the gap between creative talent and industry by creating spaces where creatives, agencies, corporates, and industry leaders can connect, learn, collaborate, and grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

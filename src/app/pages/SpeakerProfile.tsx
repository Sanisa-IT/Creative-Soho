import { Link } from "react-router";
import { ArrowLeft, Linkedin, Instagram, Twitter } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SpeakerProfile() {
  const speaker = {
    name: "Amina Yusuf",
    title: "Creative Director",
    bio: "Amina is a creative leader with over 10 years of experience in brand strategy, design and innovation.",
    image: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNyZWF0aXZlJTIwZGlyZWN0b3J8ZW58MXx8fHwxNzgyNDgxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sessions: [
      {
        title: "Creative Leadership Summit 2025",
        date: "12 Jun 2025",
      },
      {
        title: "Mentorship Session",
        date: "25 Jun 2025",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/speakers"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Speakers
        </Link>

        <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-12">
            <div>
              <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{speaker.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{speaker.title}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{speaker.bio}</p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold mb-6">Sessions</h2>
            <ul className="space-y-4">
              {speaker.sessions.map((session, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                  <div>
                    <span className="font-medium">{session.title}</span>
                    <span className="text-gray-600 ml-4">{session.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

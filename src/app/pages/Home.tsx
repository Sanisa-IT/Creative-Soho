import { Link } from "react-router";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODI0ODE1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwYnVzaW5lc3MlMjBldmVudHxlbnwxfHx8fDE3ODI0ODE2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgyNDgxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                THE CREATIVE<br />SOHO
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connecting creative talent with industry opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/events"
                  className="inline-flex items-center px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors gap-2"
                >
                  Discover Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-slate-800 text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Join the Community
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                {heroImages.map((img, idx) => (
                  <ImageWithFallback
                    key={img}
                    src={img}
                    alt="Creative workspace"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-4">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-slate-800 w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join The Creative Soho?</h2>
            <p className="text-xl text-gray-600">
              A platform designed for creative professionals to grow and thrive
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Events</h3>
              <p className="text-gray-600">
                Access exclusive events, workshops, and talks from leading creative professionals.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mentorship</h3>
              <p className="text-gray-600">
                Connect with experienced mentors who can guide your creative career journey.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                <Award className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Networking</h3>
              <p className="text-gray-600">
                Build meaningful connections with creatives, innovators, and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join industry leaders, creatives, and innovators for a day of insight, networking, and inspiration.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-800 hover:bg-gray-100 transition-colors gap-2 text-lg"
          >
            View Upcoming Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

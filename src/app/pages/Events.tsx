import { Link } from "react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const events = [
  {
    id: "creative-leadership-summit-2025",
    title: "Creative Leadership Summit 2025",
    date: "12 Jun 2025",
    time: "10:00 AM - 4:00 PM",
    location: "London, UK",
    venue: "The Soho Hotel, London",
    description: "Join industry leaders, creatives, and innovators for a day of insight, networking and inspiration.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwYnVzaW5lc3MlMjBldmVudHxlbnwxfHx8fDE3ODI0ODE2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "design-futures-talk",
    title: "Design Futures Talk",
    date: "28 Jun 2025",
    time: "2:00 PM - 5:00 PM",
    location: "London, UK",
    venue: "The Design Museum, London",
    description: "Explore the future of design with leading innovators and creative thinkers.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgyNDgxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "brand-culture-panel",
    title: "Brand & Culture Panel",
    date: "10 Jul 2025",
    time: "6:00 PM - 8:00 PM",
    location: "London, UK",
    venue: "Shoreditch Studios, London",
    description: "A panel discussion on building authentic brands in the modern creative landscape.",
    image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODI0ODE1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">
            Discover inspiring events, workshops, and networking opportunities
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-[200px_1fr_auto] gap-6 p-6">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                <div className="flex items-center">
                  <Link
                    to={`/events/${event.id}`}
                    className="px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-slate-800 text-slate-800 hover:bg-slate-50 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
}

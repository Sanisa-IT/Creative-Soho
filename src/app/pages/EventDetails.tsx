import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const eventData: Record<string, any> = {
  "creative-leadership-summit-2025": {
    title: "Creative Leadership Summit 2025",
    date: "12 Jun 2025",
    time: "10:00 AM - 4:00 PM",
    location: "London, UK",
    venue: "The Soho Hotel, London",
    description: "Join industry leaders, creatives, and innovators for a day of insight, networking and inspiration.",
  },
};

export function EventDetails() {
  const { id } = useParams();
  const event = eventData[id || "creative-leadership-summit-2025"] || eventData["creative-leadership-summit-2025"];
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    occupation: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

          <div className="space-y-3 mb-8 text-gray-700">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="text-lg">{event.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{event.venue}</span>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {event.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold mb-6">RSVP</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 text-center">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Thank You for Registering!
                </h3>
                <p className="text-green-700">
                  We've received your RSVP. You'll receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    placeholder="Enter your occupation"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-slate-800 text-white hover:bg-slate-700 transition-colors text-lg font-medium"
                >
                  Confirm RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

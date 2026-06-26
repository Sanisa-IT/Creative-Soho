import { Link } from "react-router";
import { Calendar, Users, MessageSquare, Settings, LogOut, Bell } from "lucide-react";

export function Dashboard() {
  const user = {
    name: "Amina",
    email: "amina@example.com",
  };

  const upcomingEvents = [
    {
      title: "Creative Leadership Summit 2025",
      date: "12 Jun 2025",
    },
  ];

  const mentorshipSessions = [
    {
      title: "Mentor Session with Amina Yusuf",
      date: "25 Jun 2025",
    },
  ];

  const notifications = [
    {
      message: "You have a new message",
      time: "2h ago",
    },
  ];

  const menuItems = [
    { icon: Calendar, label: "Dashboard", active: true },
    { icon: Calendar, label: "My Events", active: false },
    { icon: Users, label: "Mentorship", active: false },
    { icon: MessageSquare, label: "Messages", active: false },
    { icon: Settings, label: "Profile", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: LogOut, label: "Logout", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="bg-white border border-gray-200 p-6 h-fit">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    item.active
                      ? "bg-slate-800 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}</h1>
              <p className="text-gray-600">Here's what's happening with your account</p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold mb-1">{event.title}</h3>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Mentorship */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">My Mentorship</h2>
              <div className="space-y-4">
                {mentorshipSessions.map((session, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold mb-1">{session.title}</h3>
                      <p className="text-gray-600">{session.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200"
                  >
                    <Bell className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-gray-600">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AdminCMS.js
import { useEffect, useState } from "react";

const AdminCMS = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://safe-github-dld2.vercel.app/api/appointments/list/"
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setAppointments(Array.isArray(data) ? data : []); // Ensure `appointments` is an array
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(
        `https://safe-github-dld2.vercel.app/api/appointments/${id}/`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      fetchAppointments(); // Refresh the list after status update
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Admin CMS</h2>
      <div className="grid grid-cols-1 gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <p>
              <strong>Name:</strong> {appointment.name}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email}
            </p>
            <p>
              <strong>Date/Time:</strong>{" "}
              {new Date(appointment.dateTime).toLocaleString()}
            </p>
            <p>
              <strong>Comments:</strong> {appointment.comments}
            </p>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Status:
              </label>
              <select
                value={appointment.status}
                onChange={(e) =>
                  handleStatusChange(appointment.id, e.target.value)
                }
                className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCMS;

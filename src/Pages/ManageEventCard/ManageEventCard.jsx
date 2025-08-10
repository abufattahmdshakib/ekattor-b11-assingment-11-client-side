import React from "react";
import { Link } from "react-router-dom";  // react-router থেকে Link নিতে হবে
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

const ManageEventCard = ({ events, manageEvent, setManageEvent }) => {
  const { _id, groupName, photo, category } = events;
  const axiosSecure = useAxiosSecure();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`events/${_id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              const remainingEvent = manageEvent.filter(
                (event) => event._id !== _id
              );
              setManageEvent(remainingEvent);
              Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(() => {
            Swal.fire("Error", "Failed to delete event.", "error");
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="w-48 h-48" src={photo} alt={groupName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end space-x-2">
          <Link className="w-full" to={`/update-event/${_id}`}>
            <button className="relative w-full inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-800 group-hover:bg-green-800"></span>
              <span className="relative text-black group-hover:text-white">Update</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="relative w-full inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-800 group-hover:bg-green-800"></span>
            <span className="relative text-black group-hover:text-white">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageEventCard;

import React, { useRef, useEffect } from "react";
import heroImg from '/home_hero_img.png';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for fitBounds functionality

const Contact = () => {
    // Locations array with converted coordinates
    const locations = [
        { lat: 12.9716, lng: 77.5946, name: "KSV COMPLEX" },
        { lat: 12.9718, lng: 77.5950, name: "Ksv Nilaya" },
        { lat: 12.9820, lng: 77.6031, name: "Kunchitigara Sarvajanika Vidyarthi Nilaya" },
    ];

    // Component to focus the map on given bounds
    const MapFocus = ({ locations }) => {
        const map = useMap(); // Access the map instance

        useEffect(() => {
            // Create an array of LatLng for each location
            const bounds = locations.map((location) => [location.lat, location.lng]);
            map.fitBounds(bounds); // Focus map on the bounds
        }, [map, locations]);

        return null; // This component does not render anything
    };

    return (
        <div>
            {/* Hero Image Section */}
            <div
                className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                {/* Overlay with opacity */}
                <div className="absolute inset-0 bg-[#14353F] bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <h1 className="text-white text-3xl md:text-4xl leading-tight">
                        Get in touch with Connect4Society
                    </h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row gap-6 p-4 w-full md:w-9/12 mx-auto my-10">
  {/* Form Section */}
  <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-gray-700 mb-4">
      Connect with Us for Collaboration or Support
    </h2>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        className="p-2 rounded-md bg-gray-100 focus:outline-none"
        style={{ border: "none" }}
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded-md bg-gray-100 focus:outline-none"
        style={{ border: "none" }}
      />
      <textarea
        placeholder="Message"
        rows="5"
        className="p-2 rounded-md bg-gray-100 focus:outline-none"
        style={{ border: "none" }}
      />
      <button
        type="submit"
        className="p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Leaflet Map Section */}
  <div className="w-full md:w-1/2 p-1 border rounded-lg shadow-lg">
    <MapContainer
      center={[12.9716, 77.5946]} // Center initially on Bengaluru
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      {/* MapFocus component to adjust bounds based on markers */}
      <MapFocus locations={locations} />
    </MapContainer>
  </div>
</div>
            <div className="w-full p-4 flex flex-col items-center">
                <div className="flex flex-col gap-2 text-lg items-center">
                    <h3 className="text-3xl font-semibold text-gray-600">Bengaluru Office</h3>
                    <a
                        href="mailto:connect4society@gmail.com"
                        className="hover:text-orange-600 transition duration-200"
                    >
                        connect4society@gmail.com
                    </a>
                    <a
                        href="tel:+916363059709"
                        className="hover:text-orange-600 transition duration-200"
                    >
                        +91 6363059709
                    </a>
                    <p className="text-gray-700 hover:text-orange-600 text-center">
                        Miller’s Road, <br />
                        Vasanthanagara, <br />
                        Bangalore
                    </p>
                </div>
                <hr className="w-full border-t my-10 border-orange-600" />
            </div>

        </div>
    );
};

export default Contact;

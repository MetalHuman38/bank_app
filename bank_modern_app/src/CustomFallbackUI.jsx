// CustomFallbackUI.js
import React from "react";

const CustomFallbackUI = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-5xl font-bold text-pink-500">Whoops!</h1>
    <p className="mt-4 text-lg text-gray-700">
      Something went wrong. We're working on fixing it. Please try again later.
    </p>
    <button
      className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={() => window.location.reload()}
    >
      Reload Page
    </button>
    {/* You can add more options or even a link to a contact/support page */}
  </div>
);

export default CustomFallbackUI;

import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <span className="ml-3 text-lg text-gray-600">Loading...</span>
    </div>
  );
};

export default Loader;

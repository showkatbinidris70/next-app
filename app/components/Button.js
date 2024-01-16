"use client";

import React from "react";

export default function Button() {
  return (
    <div>
      <button
        className="bg-slate-300 text-blue-900 mt-3 px-3 py-2 rounded-sm"
        onClick={() => console.log("clicked")}
      >
        Click Here
      </button>
    </div>
  );
}

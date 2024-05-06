"use client";
import Timer from "@/components/Timer";
import Tasks from "@/components/Tasks";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen bg-red-500">
      <Timer />
      <Tasks />
    </div>
  );
}

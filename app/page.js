"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Messages from "@/components/Messages";
import Calls from "@/components/Calls";
import Settings from "@/components/Settings";

export default function Home() {
  const [activeSection, setActiveSection] = useState("messages");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "messages":
        return <Messages />;
      case "calls":
        return <Calls />;
      case "settings":
        return <Settings />;
      default:
        return <Messages />;
    }
  };

  return (
    <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 overflow-hidden pb-32 md:pb-0">
        {renderSection()}
      </main>
    </div>
  );
}

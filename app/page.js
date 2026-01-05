"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Messages from "@/components/Messages";
import Calls from "@/components/Calls";
import Settings from "@/components/Settings";
import Login from "@/components/Login";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRFC, setUserRFC] = useState("");
  const [activeSection, setActiveSection] = useState("messages");
  const [loading, setLoading] = useState(true);

  // Verificar si hay sesión guardada
  useEffect(() => {
    const savedRFC = localStorage.getItem("marinia_rfc");
    if (savedRFC) {
      setUserRFC(savedRFC);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (rfc) => {
    localStorage.setItem("marinia_rfc", rfc);
    setUserRFC(rfc);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("marinia_rfc");
    setUserRFC("");
    setIsLoggedIn(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "messages":
        return <Messages />;
      case "calls":
        return <Calls />;
      case "settings":
        return <Settings onLogout={handleLogout} userRFC={userRFC} />;
      default:
        return <Messages />;
    }
  };

  // Mostrar loading mientras verifica sesión
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #e5e7eb',
          borderTopColor: '#3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Mostrar login si no ha iniciado sesión
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Mostrar app principal
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

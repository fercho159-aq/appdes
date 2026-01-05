"use client";
import { useState } from "react";
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed, X, Delete } from "lucide-react";
import { calls } from "@/data/mockData";

const dialPadNumbers = [
    { num: "1", letters: "" },
    { num: "2", letters: "ABC" },
    { num: "3", letters: "DEF" },
    { num: "4", letters: "GHI" },
    { num: "5", letters: "JKL" },
    { num: "6", letters: "MNO" },
    { num: "7", letters: "PQRS" },
    { num: "8", letters: "TUV" },
    { num: "9", letters: "WXYZ" },
    { num: "*", letters: "" },
    { num: "0", letters: "+" },
    { num: "#", letters: "" },
];

function CallIcon({ type, missed }) {
    if (missed) return <PhoneMissed style={{ width: '18px', height: '18px', color: '#ef4444' }} />;
    if (type === "incoming") return <PhoneIncoming style={{ width: '18px', height: '18px', color: '#22c55e' }} />;
    return <PhoneOutgoing style={{ width: '18px', height: '18px', color: '#3b82f6' }} />;
}

export default function Calls() {
    const [showDialer, setShowDialer] = useState(false);
    const [dialNumber, setDialNumber] = useState("");

    const handleDial = (num) => {
        setDialNumber((prev) => prev + num);
    };

    const handleDelete = () => {
        setDialNumber((prev) => prev.slice(0, -1));
    };

    const handleCall = () => {
        if (dialNumber) {
            alert(`Llamando a ${dialNumber}...`);
            setDialNumber("");
            setShowDialer(false);
        }
    };

    return (
        <div style={{ height: '100%', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
            {/* Espaciador superior */}
            <div style={{ height: '40px', minHeight: '40px', flexShrink: 0, backgroundColor: 'white' }} />

            {/* Header */}
            <div style={{ backgroundColor: 'white', padding: '0 28px 28px 28px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Llamadas</h1>
                <p style={{ fontSize: '15px', color: '#6b7280' }}>Historial de llamadas recientes</p>
            </div>

            {/* Separador */}
            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '0 28px' }} />

            {/* Lista de llamadas */}
            <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'white', padding: '16px 20px', paddingBottom: '140px' }}>
                {calls.map((call, index) => (
                    <div key={call.id}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '20px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            className="hover:bg-gray-50"
                        >
                            {/* Avatar */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: call.missed ? 'linear-gradient(135deg, #fef2f2, #fee2e2)' : 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <span style={{
                                    color: call.missed ? '#dc2626' : '#4b5563',
                                    fontWeight: 600,
                                    fontSize: '16px'
                                }}>
                                    {call.user.avatar}
                                </span>
                            </div>

                            {/* Call Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <h3 style={{
                                    fontWeight: 600,
                                    fontSize: '17px',
                                    color: call.missed ? '#dc2626' : '#111827',
                                    marginBottom: '6px'
                                }}>
                                    {call.user.name}
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <CallIcon type={call.type} missed={call.missed} />
                                    <span style={{ fontSize: '14px', color: '#6b7280' }}>
                                        {call.type === "incoming" ? "Entrante" : "Saliente"}
                                        {call.missed ? " - Perdida" : ` - ${call.duration}`}
                                    </span>
                                </div>
                            </div>

                            {/* Time & Call Button */}
                            <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>{call.time}</p>
                                <button style={{
                                    padding: '10px',
                                    backgroundColor: '#eff6ff',
                                    borderRadius: '12px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                    className="hover:bg-blue-100"
                                >
                                    <Phone style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                                </button>
                            </div>
                        </div>

                        {/* Separador entre items */}
                        {index < calls.length - 1 && (
                            <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '0 16px' }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Dial Button */}
            <button
                onClick={() => setShowDialer(true)}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '24px',
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    zIndex: 20
                }}
                className="hover:scale-105"
            >
                <Phone style={{ width: '28px', height: '28px', color: 'white' }} />
            </button>

            {/* Dialer Modal */}
            {showDialer && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    zIndex: 50
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        width: '100%',
                        maxWidth: '400px',
                        borderRadius: '24px 24px 0 0',
                        boxShadow: '0 -10px 40px rgba(0,0,0,0.1)'
                    }}>
                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px 24px',
                            borderBottom: '1px solid #f3f4f6'
                        }}>
                            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>Teclado</h2>
                            <button
                                onClick={() => {
                                    setShowDialer(false);
                                    setDialNumber("");
                                }}
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f3f4f6',
                                    borderRadius: '12px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <X style={{ width: '20px', height: '20px', color: '#6b7280' }} />
                            </button>
                        </div>

                        {/* Number Display */}
                        <div style={{
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 24px'
                        }}>
                            <span style={{
                                fontSize: '32px',
                                fontWeight: 600,
                                color: dialNumber ? '#111827' : '#d1d5db',
                                letterSpacing: '2px'
                            }}>
                                {dialNumber || "Ingresa un número"}
                            </span>
                        </div>

                        {/* Dial Pad */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '12px',
                            padding: '16px 24px'
                        }}>
                            {dialPadNumbers.map((item) => (
                                <button
                                    key={item.num}
                                    onClick={() => handleDial(item.num)}
                                    style={{
                                        height: '64px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#f9fafb',
                                        borderRadius: '16px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s'
                                    }}
                                    className="hover:bg-gray-200 active:scale-95"
                                >
                                    <span style={{ fontSize: '24px', fontWeight: 600, color: '#111827' }}>{item.num}</span>
                                    {item.letters && (
                                        <span style={{ fontSize: '10px', color: '#9ca3af', letterSpacing: '2px' }}>{item.letters}</span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '32px',
                            padding: '16px 24px 32px'
                        }}>
                            <button
                                onClick={handleDelete}
                                disabled={!dialNumber}
                                style={{
                                    padding: '16px',
                                    backgroundColor: 'transparent',
                                    borderRadius: '50%',
                                    border: 'none',
                                    cursor: dialNumber ? 'pointer' : 'default'
                                }}
                            >
                                <Delete style={{ width: '24px', height: '24px', color: dialNumber ? '#4b5563' : '#d1d5db' }} />
                            </button>
                            <button
                                onClick={handleCall}
                                disabled={!dialNumber}
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'none',
                                    cursor: dialNumber ? 'pointer' : 'default',
                                    background: dialNumber ? 'linear-gradient(135deg, #22c55e, #16a34a)' : '#e5e7eb',
                                    boxShadow: dialNumber ? '0 10px 25px -5px rgba(34, 197, 94, 0.4)' : 'none',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <Phone style={{ width: '28px', height: '28px', color: dialNumber ? 'white' : '#9ca3af' }} />
                            </button>
                            <div style={{ width: '56px' }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

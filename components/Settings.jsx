"use client";
import { useState } from "react";
import { User, Bell, LogOut, Camera, ChevronRight } from "lucide-react";
import { currentUser } from "@/data/mockData";

function Toggle({ enabled, onChange }) {
    return (
        <button
            onClick={() => onChange(!enabled)}
            style={{
                position: 'relative',
                width: '52px',
                height: '32px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: enabled ? '#3b82f6' : '#e5e7eb',
                transition: 'all 0.3s'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '4px',
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s',
                    transform: enabled ? 'translateX(24px)' : 'translateX(4px)'
                }}
            />
        </button>
    );
}

export default function Settings({ onLogout, userRFC }) {
    const [notifications, setNotifications] = useState(true);
    const [sound, setSound] = useState(true);

    return (
        <div style={{ height: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
            {/* Espaciador superior */}
            <div style={{ height: '40px', minHeight: '40px', flexShrink: 0 }} />

            {/* Header */}
            <div style={{ padding: '0 28px 32px 28px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>Configuración</h1>
            </div>

            {/* Contenido */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px', paddingBottom: '120px' }}>

                {/* Perfil */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '20px',
                    marginBottom: '24px'
                }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 20px -4px rgba(59,130,246,0.3)'
                        }}>
                            <span style={{ color: 'white', fontSize: '22px', fontWeight: 700 }}>{currentUser.avatar}</span>
                        </div>
                        <button style={{
                            position: 'absolute',
                            bottom: '-2px',
                            right: '-2px',
                            width: '28px',
                            height: '28px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            border: '2px solid #f3f4f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <Camera style={{ width: '14px', height: '14px', color: '#6b7280' }} />
                        </button>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{currentUser.name}</h3>
                        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>{userRFC || currentUser.email}</p>
                    </div>
                    <ChevronRight style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                </div>

                {/* Opciones simples */}
                <div style={{ backgroundColor: '#f9fafb', borderRadius: '20px', overflow: 'hidden', marginBottom: '24px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        borderBottom: '1px solid #e5e7eb'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#dbeafe',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Bell style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                            </div>
                            <span style={{ fontWeight: 600, fontSize: '16px', color: '#111827' }}>Notificaciones</span>
                        </div>
                        <Toggle enabled={notifications} onChange={setNotifications} />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#f3e8ff',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Bell style={{ width: '20px', height: '20px', color: '#9333ea' }} />
                            </div>
                            <span style={{ fontWeight: 600, fontSize: '16px', color: '#111827' }}>Sonido</span>
                        </div>
                        <Toggle enabled={sound} onChange={setSound} />
                    </div>
                </div>

                {/* Cerrar sesión */}
                <button
                    onClick={onLogout}
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '20px 24px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#fef2f2',
                        transition: 'all 0.2s'
                    }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fee2e2'
                    }}>
                        <LogOut style={{ width: '20px', height: '20px', color: '#dc2626' }} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '16px', color: '#dc2626' }}>
                        Cerrar sesión
                    </span>
                </button>

                {/* Versión */}
                <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                    <p style={{ fontSize: '13px', color: '#9ca3af' }}>Marinia v1.0.0</p>
                </div>
            </div>
        </div>
    );
}

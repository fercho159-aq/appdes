"use client";
import { useState } from "react";
import { User, ArrowRight, AlertCircle } from "lucide-react";

export default function Login({ onLogin }) {
    const [rfc, setRfc] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const validateRFC = (value) => {
        // RFC formato: 4 letras + 6 números + 3 alfanuméricos (persona física)
        // o 3 letras + 6 números + 3 alfanuméricos (persona moral)
        const rfcPattern = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i;
        return rfcPattern.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const cleanRFC = rfc.trim().toUpperCase();

        if (!cleanRFC) {
            setError("Por favor ingresa tu RFC");
            return;
        }

        if (!validateRFC(cleanRFC)) {
            setError("RFC inválido. Formato: XXXX000000XXX");
            return;
        }

        setLoading(true);

        // Simular verificación
        setTimeout(() => {
            setLoading(false);
            onLogin(cleanRFC);
        }, 1000);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9fafb',
            padding: '24px'
        }}>
            {/* Logo */}
            <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
                boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.4)'
            }}>
                <span style={{ color: 'white', fontSize: '36px', fontWeight: 800 }}>M</span>
            </div>

            {/* Título */}
            <h1 style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '8px',
                textAlign: 'center'
            }}>
                Marinia
            </h1>
            <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '40px',
                textAlign: 'center'
            }}>
                Ingresa tu RFC para continuar
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '360px' }}>
                {/* Input RFC */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '8px'
                    }}>
                        RFC
                    </label>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                            <User style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                        </div>
                        <input
                            type="text"
                            value={rfc}
                            onChange={(e) => {
                                setRfc(e.target.value.toUpperCase());
                                setError("");
                            }}
                            placeholder="XXXX000000XXX"
                            maxLength={13}
                            style={{
                                width: '100%',
                                padding: '18px 20px 18px 52px',
                                fontSize: '16px',
                                fontWeight: 500,
                                letterSpacing: '1px',
                                backgroundColor: 'white',
                                border: error ? '2px solid #ef4444' : '2px solid #e5e7eb',
                                borderRadius: '16px',
                                outline: 'none',
                                transition: 'all 0.2s',
                                color: '#111827'
                            }}
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '12px',
                            padding: '12px 16px',
                            backgroundColor: '#fef2f2',
                            borderRadius: '12px'
                        }}>
                            <AlertCircle style={{ width: '18px', height: '18px', color: '#dc2626', flexShrink: 0 }} />
                            <span style={{ fontSize: '14px', color: '#dc2626' }}>{error}</span>
                        </div>
                    )}
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '18px 24px',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'white',
                        background: loading ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        border: 'none',
                        borderRadius: '16px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        boxShadow: loading ? 'none' : '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
                        transition: 'all 0.2s'
                    }}
                >
                    {loading ? (
                        <>
                            <div style={{
                                width: '20px',
                                height: '20px',
                                border: '3px solid rgba(255,255,255,0.3)',
                                borderTopColor: 'white',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite'
                            }} />
                            Verificando...
                        </>
                    ) : (
                        <>
                            Ingresar
                            <ArrowRight style={{ width: '20px', height: '20px' }} />
                        </>
                    )}
                </button>
            </form>

            {/* Ayuda */}
            <p style={{
                marginTop: '32px',
                fontSize: '14px',
                color: '#9ca3af',
                textAlign: 'center'
            }}>
                ¿Necesitas ayuda? Contacta a soporte
            </p>

            <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

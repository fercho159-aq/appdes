"use client";
import { useState } from "react";
import { Search, Send, Phone, CheckCheck } from "lucide-react";
import { chats } from "@/data/mockData";

export default function Messages() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [showChatList, setShowChatList] = useState(true);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = {
            id: chatMessages.length + 1,
            text: message,
            sent: true,
            time: new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" }),
        };

        setChatMessages([...chatMessages, newMessage]);
        setMessage("");
    };

    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
        setChatMessages(chat.messages);
        setShowChatList(false);
    };

    return (
        <div className="flex h-full bg-gray-50">
            {/* Chat List */}
            <div
                className={`${showChatList ? "flex" : "hidden"
                    } md:flex w-full md:w-[420px] lg:w-[450px] flex-col bg-white border-r border-gray-100 overflow-y-auto`}
            >
                {/* Espaciador superior */}
                <div style={{ height: '40px', minHeight: '40px', flexShrink: 0 }} className="bg-white" />

                {/* Header */}
                <div style={{ padding: '0 28px 24px 28px' }} className="bg-white">
                    <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', marginBottom: '24px' }}>
                        Mensajes
                    </h1>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center" style={{ paddingLeft: '20px' }}>
                            <Search style={{ width: '24px', height: '24px' }} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar conversación..."
                            style={{
                                width: '100%',
                                paddingLeft: '56px',
                                paddingRight: '24px',
                                paddingTop: '18px',
                                paddingBottom: '18px',
                                fontSize: '16px',
                                backgroundColor: '#f3f4f6',
                                borderRadius: '16px',
                                border: 'none',
                                outline: 'none'
                            }}
                            className="text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>
                </div>

                {/* Separador */}
                <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '0 28px' }} />

                {/* Espaciador */}
                <div style={{ height: '16px', minHeight: '16px', flexShrink: 0 }} />

                {/* Chat List */}
                <div style={{ padding: '0 16px', paddingBottom: '120px' }}>
                    {chats.map((chat, index) => (
                        <div key={chat.id}>
                            <button
                                onClick={() => handleSelectChat(chat)}
                                style={{
                                    width: '100%',
                                    padding: '24px 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '18px',
                                    borderRadius: '20px',
                                    border: 'none',
                                    backgroundColor: selectedChat?.id === chat.id ? '#eff6ff' : 'transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                className="hover:bg-gray-50"
                            >
                                {/* Avatar */}
                                <div className="relative" style={{ flexShrink: 0 }}>
                                    <div
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            backgroundColor: selectedChat?.id === chat.id ? '#3b82f6' : '#e5e7eb',
                                            color: selectedChat?.id === chat.id ? 'white' : '#4b5563'
                                        }}
                                    >
                                        {chat.user.avatar}
                                    </div>
                                    {chat.user.status === "active" && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '2px',
                                                right: '2px',
                                                width: '14px',
                                                height: '14px',
                                                backgroundColor: '#22c55e',
                                                borderRadius: '50%',
                                                border: '3px solid white'
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <h3 style={{
                                            fontWeight: 700,
                                            fontSize: '17px',
                                            color: '#111827',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {chat.user.name}
                                        </h3>
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            marginLeft: '16px',
                                            color: chat.unread > 0 ? '#2563eb' : '#9ca3af',
                                            flexShrink: 0
                                        }}>
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <p style={{
                                            fontSize: '15px',
                                            color: chat.unread > 0 ? '#1f2937' : '#6b7280',
                                            fontWeight: chat.unread > 0 ? 500 : 400,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {chat.lastMessage}
                                        </p>

                                        {chat.unread > 0 && (
                                            <div style={{
                                                marginLeft: '12px',
                                                minWidth: '22px',
                                                height: '22px',
                                                padding: '0 7px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#2563eb',
                                                borderRadius: '50px',
                                                flexShrink: 0
                                            }}>
                                                <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>
                                                    {chat.unread}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Separador entre items */}
                            {index < chats.length - 1 && (
                                <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '12px 24px' }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div
                className={`${!showChatList ? "flex" : "hidden"
                    } md:flex flex-1 flex-col bg-white`}
                style={{ height: 'calc(100vh - 100px)' }}
            >
                {selectedChat ? (
                    <>
                        {/* Chat Header */}
                        <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6' }} className="flex items-center justify-between bg-white">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                                <button
                                    onClick={() => setShowChatList(true)}
                                    className="md:hidden"
                                    style={{ padding: '8px', marginLeft: '-4px', flexShrink: 0 }}
                                >
                                    <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    backgroundColor: '#3b82f6',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    flexShrink: 0
                                }}>
                                    {selectedChat.user.avatar}
                                </div>
                                <div style={{ minWidth: 0 }}>
                                    <h2 style={{ fontWeight: 700, fontSize: '16px', color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{selectedChat.user.name}</h2>
                                    <p style={{ fontSize: '12px', color: '#16a34a', fontWeight: 500, marginTop: '2px' }}>En línea</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                                <button style={{ padding: '10px' }} className="text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                    <Phone style={{ width: '22px', height: '22px' }} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {chatMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        style={{ display: 'flex', justifyContent: msg.sent ? 'flex-end' : 'flex-start' }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: '80%',
                                                padding: '16px 24px',
                                                fontSize: '16px',
                                                lineHeight: 1.6,
                                                backgroundColor: msg.sent ? '#3b82f6' : 'white',
                                                color: msg.sent ? 'white' : '#1f2937',
                                                borderRadius: msg.sent ? '24px 24px 8px 24px' : '24px 24px 24px 8px',
                                                border: msg.sent ? 'none' : '1px solid #e5e7eb'
                                            }}
                                        >
                                            <p>{msg.text}</p>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                gap: '6px',
                                                marginTop: '8px',
                                                fontSize: '11px',
                                                color: msg.sent ? 'rgba(255,255,255,0.7)' : '#9ca3af'
                                            }}>
                                                {msg.time}
                                                {msg.sent && <CheckCheck style={{ width: '16px', height: '16px' }} />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input Area - Fixed at bottom */}
                        <form
                            onSubmit={handleSendMessage}
                            style={{
                                position: 'fixed',
                                bottom: '80px',
                                left: 0,
                                right: 0,
                                padding: '12px 16px',
                                borderTop: '1px solid #f3f4f6',
                                backgroundColor: 'white',
                                zIndex: 40
                            }}
                            className="md:static md:bottom-auto">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '20px' }}>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Escribe un mensaje..."
                                    style={{
                                        flex: 1,
                                        padding: '14px 20px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '16px',
                                        color: '#1f2937'
                                    }}
                                    className="placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!message.trim()}
                                    style={{
                                        padding: '14px',
                                        borderRadius: '14px',
                                        border: 'none',
                                        cursor: message.trim() ? 'pointer' : 'not-allowed',
                                        backgroundColor: message.trim() ? '#3b82f6' : '#d1d5db',
                                        color: message.trim() ? 'white' : '#9ca3af'
                                    }}
                                >
                                    <Send style={{ width: '22px', height: '22px' }} />
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ padding: '48px', backgroundColor: '#f9fafb' }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            backgroundColor: '#dbeafe',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px'
                        }}>
                            <Search style={{ width: '56px', height: '56px', color: '#3b82f6' }} />
                        </div>
                        <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Tus mensajes</h3>
                        <p style={{ color: '#6b7280', fontSize: '17px', maxWidth: '400px', lineHeight: 1.6 }}>
                            Selecciona una conversación de la lista para comenzar a chatear.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

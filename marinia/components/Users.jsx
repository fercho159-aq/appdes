"use client";
import { useState } from "react";
import { Search, Plus, Edit2, Trash2, Check, X, MoreVertical } from "lucide-react";
import { users as initialUsers } from "@/data/mockData";

export default function Users() {
    const [users, setUsers] = useState(initialUsers);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const handleEdit = (user) => {
        setEditingId(user.id);
        setEditForm({ ...user });
    };

    const handleSave = () => {
        setUsers(users.map((u) => (u.id === editingId ? editForm : u)));
        setEditingId(null);
        setEditForm({});
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditForm({});
    };

    const handleDelete = (id) => {
        if (confirm("¿Estás seguro de eliminar este usuario?")) {
            setUsers(users.filter((u) => u.id !== id));
        }
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getRoleBadge = (role) => {
        const styles = {
            admin: "bg-purple-100 text-purple-700",
            moderator: "bg-blue-100 text-blue-700",
            user: "bg-gray-100 text-gray-600",
        };
        return styles[role] || styles.user;
    };

    const getStatusBadge = (status) => {
        return status === "active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-600";
    };

    return (
        <div className="h-full bg-gray-50/50 flex flex-col">
            {/* Header */}
            <div className="bg-white p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Usuarios</h1>
                        <p className="text-gray-500 mt-1">Gestiona los usuarios de la plataforma</p>
                    </div>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                        <Plus className="w-5 h-5" />
                        <span className="font-medium">Nuevo Usuario</span>
                    </button>
                </div>

                {/* Search */}
                <div className="relative mt-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar usuarios..."
                        className="w-full md:w-80 pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="text-left p-4 text-sm font-semibold text-gray-600">Usuario</th>
                                    <th className="text-left p-4 text-sm font-semibold text-gray-600">Email</th>
                                    <th className="text-left p-4 text-sm font-semibold text-gray-600">Teléfono</th>
                                    <th className="text-left p-4 text-sm font-semibold text-gray-600">Rol</th>
                                    <th className="text-left p-4 text-sm font-semibold text-gray-600">Estado</th>
                                    <th className="text-right p-4 text-sm font-semibold text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            {editingId === user.id ? (
                                                <input
                                                    value={editForm.name}
                                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                    className="px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                                />
                                            ) : (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                                        <span className="text-white text-sm font-semibold">{user.avatar}</span>
                                                    </div>
                                                    <span className="font-medium text-gray-800">{user.name}</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {editingId === user.id ? (
                                                <input
                                                    value={editForm.email}
                                                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                                    className="px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                                />
                                            ) : (
                                                <span className="text-gray-600">{user.email}</span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {editingId === user.id ? (
                                                <input
                                                    value={editForm.phone}
                                                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                                    className="px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                                />
                                            ) : (
                                                <span className="text-gray-600">{user.phone}</span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${getRoleBadge(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(user.status)}`}>
                                                {user.status === "active" ? "Activo" : "Inactivo"}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                {editingId === user.id ? (
                                                    <>
                                                        <button
                                                            onClick={handleSave}
                                                            className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                                                        >
                                                            <Check className="w-5 h-5 text-green-600" />
                                                        </button>
                                                        <button
                                                            onClick={handleCancel}
                                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                        >
                                                            <X className="w-5 h-5 text-red-500" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleEdit(user)}
                                                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                                        >
                                                            <Edit2 className="w-5 h-5 text-blue-500" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(user.id)}
                                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                        >
                                                            <Trash2 className="w-5 h-5 text-red-500" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-100">
                        {filteredUsers.map((user) => (
                            <div key={user.id} className="p-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-semibold">{user.avatar}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{user.name}</h3>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Edit2 className="w-5 h-5 text-blue-500" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5 text-red-500" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${getRoleBadge(user.role)}`}>
                                        {user.role}
                                    </span>
                                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(user.status)}`}>
                                        {user.status === "active" ? "Activo" : "Inactivo"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

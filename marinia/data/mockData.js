// Mock data for Marinia MVP

export const users = [
  { id: 1, name: "María García", email: "maria@email.com", phone: "+52 55 1234 5678", status: "active", avatar: "MG", role: "admin" },
  { id: 2, name: "Carlos López", email: "carlos@email.com", phone: "+52 55 2345 6789", status: "active", avatar: "CL", role: "user" },
  { id: 3, name: "Ana Martínez", email: "ana@email.com", phone: "+52 55 3456 7890", status: "inactive", avatar: "AM", role: "user" },
  { id: 4, name: "Roberto Sánchez", email: "roberto@email.com", phone: "+52 55 4567 8901", status: "active", avatar: "RS", role: "user" },
  { id: 5, name: "Laura Hernández", email: "laura@email.com", phone: "+52 55 5678 9012", status: "active", avatar: "LH", role: "moderator" },
  { id: 6, name: "Diego Rodríguez", email: "diego@email.com", phone: "+52 55 6789 0123", status: "inactive", avatar: "DR", role: "user" },
];

export const chats = [
  {
    id: 1,
    user: users[1],
    lastMessage: "¡Hola! ¿Cómo estás?",
    time: "10:30",
    unread: 2,
    messages: [
      { id: 1, text: "Hola, ¿qué tal?", sent: false, time: "10:15" },
      { id: 2, text: "¡Hola Carlos! Todo bien, ¿y tú?", sent: true, time: "10:20" },
      { id: 3, text: "Muy bien, gracias. ¿Tienes tiempo para revisar el proyecto?", sent: false, time: "10:25" },
      { id: 4, text: "¡Hola! ¿Cómo estás?", sent: false, time: "10:30" },
    ]
  },
  {
    id: 2,
    user: users[2],
    lastMessage: "Te envío los documentos mañana",
    time: "09:45",
    unread: 0,
    messages: [
      { id: 1, text: "Buenos días Ana", sent: true, time: "09:00" },
      { id: 2, text: "Buenos días, ¿cómo va todo?", sent: false, time: "09:15" },
      { id: 3, text: "Necesito los documentos del proyecto", sent: true, time: "09:30" },
      { id: 4, text: "Te envío los documentos mañana", sent: false, time: "09:45" },
    ]
  },
  {
    id: 3,
    user: users[3],
    lastMessage: "Perfecto, nos vemos entonces",
    time: "Ayer",
    unread: 0,
    messages: [
      { id: 1, text: "¿Quedamos para comer?", sent: true, time: "14:00" },
      { id: 2, text: "Sí, ¿a qué hora?", sent: false, time: "14:15" },
      { id: 3, text: "A las 2pm en el restaurante de siempre", sent: true, time: "14:20" },
      { id: 4, text: "Perfecto, nos vemos entonces", sent: false, time: "14:25" },
    ]
  },
  {
    id: 4,
    user: users[4],
    lastMessage: "¡Gracias por la información!",
    time: "Ayer",
    unread: 1,
    messages: [
      { id: 1, text: "Laura, ¿tienes el reporte?", sent: true, time: "11:00" },
      { id: 2, text: "Sí, te lo envío ahora", sent: false, time: "11:05" },
      { id: 3, text: "Recibido, muchas gracias", sent: true, time: "11:30" },
      { id: 4, text: "¡Gracias por la información!", sent: false, time: "11:35" },
    ]
  },
  {
    id: 5,
    user: users[5],
    lastMessage: "La reunión será a las 3pm",
    time: "Lun",
    unread: 0,
    messages: [
      { id: 1, text: "Diego, ¿cuándo es la reunión?", sent: true, time: "16:00" },
      { id: 2, text: "La reunión será a las 3pm", sent: false, time: "16:10" },
    ]
  },
];

export const calls = [
  { id: 1, user: users[1], type: "incoming", duration: "5:23", time: "Hoy, 09:30", missed: false },
  { id: 2, user: users[2], type: "outgoing", duration: "12:45", time: "Hoy, 08:15", missed: false },
  { id: 3, user: users[3], type: "incoming", duration: "0:00", time: "Ayer, 18:30", missed: true },
  { id: 4, user: users[4], type: "outgoing", duration: "3:12", time: "Ayer, 14:00", missed: false },
  { id: 5, user: users[5], type: "incoming", duration: "8:56", time: "Lun, 10:45", missed: false },
  { id: 6, user: users[0], type: "outgoing", duration: "0:00", time: "Lun, 09:00", missed: true },
  { id: 7, user: users[1], type: "incoming", duration: "2:34", time: "Dom, 15:20", missed: false },
  { id: 8, user: users[2], type: "outgoing", duration: "15:00", time: "Dom, 11:00", missed: false },
];

export const currentUser = {
  id: 0,
  name: "Fernando Trejo",
  email: "fernando@marinia.app",
  phone: "+52 55 1111 2222",
  avatar: "FT",
  notifications: {
    messages: true,
    calls: true,
    sound: true,
    vibration: true,
  }
};

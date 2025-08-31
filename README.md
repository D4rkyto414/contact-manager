# 📓 Contact Manager - Proyecto Módulo 1  

Aplicación desarrollada en **React** que permite gestionar una lista de contactos con funcionalidades de visualización, búsqueda, favoritos, validación de formularios y persistencia local.  

Este proyecto consolida las competencias de **desarrollo frontend moderno**, aplicando conceptos de:  
- Componentes  
- Props  
- State  
- Callbacks  
- Formularios controlados  
- Eventos  
- Patrones de arquitectura escalable en React  

---

## 🛠️ Stack Tecnológico  
- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/) como bundler (opcional, puedes usar Create React App)  
- [TailwindCSS](https://tailwindcss.com/) para estilos  
- [Netlify](https://www.netlify.com/) para despliegue  

---
## ⚙️ Instrucciones de instalación y uso  

1. Clonar el repositorio en tu máquina local:  
   ```bash
   git clone https://github.com/D4rjyto414/contact-manager.git
   cd contact-manager

2. Instalar dependencias:
    ```bash
    npm install
3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm run dev
4. Abrir en el navegador:
   ```arduino
   http://localhost:5173
5. Para compilar y generar versión de producción:
   ```bash
   npm run build
---
## ✅ Funcionalidades implementadas  

### Funcionalidades Core  

- 👀 **Visualización de contactos** en lista interactiva.  
- ⭐ **Selección y destacado** de contactos individuales.  
- 💚 **Sistema de favoritos** con toggle dinámico.  
- ➕ **Agregar contactos nuevos** mediante formulario controlado.  
- ⚡ **Validación en tiempo real** con manejo de errores.  
- 🔢 **Contador dinámico** de contactos totales y favoritos.  

---

### Funcionalidades Avanzadas (Retos)  

- 🔍 **Búsqueda inteligente multi-campo** (nombre, teléfono, estado de favorito) con highlighting.  
- 🗂️ **Sistema de categorías** (Trabajo, Personal, Familia) con filtros visuales y código de colores.  
- 💾 **Persistencia de datos con LocalStorage** para mantener la información entre sesiones.  
- ✏️ **Edición de contactos existentes** usando formularios pre-poblados.  
- 🌐 **Despliegue en Netlify** con URL funcional y configuración lista para producción.  

---

## 🧩 Decisiones técnicas y patterns aplicados  

- **Arquitectura modular:** todos los componentes (`Header`, `ContactList`, `ContactCard`, `ContactForm`, `ContactSearch`) están desacoplados y reutilizables.  
- **Comunicación padre → hijo con props:** paso de datos y estados hacia los componentes hijos.  
- **Callbacks hijo → padre:** para manejar acciones como marcar favoritos, eliminar y editar contactos.  
- **Formularios controlados:** cada campo está vinculado al estado local con validación en tiempo real.  
- **Gestión de estado con Hooks (`useState`, `useEffect`):** para mantener la UI sincronizada con los datos.  
- **Persistencia local con LocalStorage:** asegura que los datos se conserven al recargar la página.  
- **TailwindCSS:** para un diseño responsive, limpio y escalable.  
- **Buenas prácticas de React:** componentes pequeños, responsabilidades únicas y reutilización de lógica.  


---
## 📂 Estructura de Archivos Requerida  

```bash
contact-manager/
│── public/
│── src/
│   ├── components/
│   │   ├── ContactCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactList.jsx
│   │   ├── ContactSearch.jsx
│   │   ├── Header.jsx
│   ├── hooks/        # Custom hooks (opcional)
│   ├── utils/        # Funciones utilitarias
│   ├── data/contacts.js   # Data mock y constantes
│   ├── App.jsx
│   ├── index.js
│── package.json
│── README.md

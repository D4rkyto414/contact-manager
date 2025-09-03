# 📓 Contact Manager - Proyecto Módulo 2  

Extensión del proyecto **Contact Manager (Módulo 1)**, ahora integrando **funcionalidades avanzadas** que consolidan lo aprendido en el **Módulo 2: Desarrollo Frontend con React**.  

Se añaden características como **consumo de APIs, asincronía, navegación con React Router y persistencia avanzada**, elevando el nivel técnico de la aplicación.  

---

## 🛠️ Stack Tecnológico  
- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/) como bundler  
- [TailwindCSS](https://tailwindcss.com/) para estilos  
- [React Router](https://reactrouter.com/) para navegación y rutas dinámicas  
- [Netlify](https://www.netlify.com/) para despliegue  
- [API Externa](https://jsonplaceholder.typicode.com/) (mock de datos) para integración y asincronía  

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

### Funcionalidades Core  (Módulo 1)

- 👀 **Visualización de contactos** en lista interactiva.  
- ⭐ **Selección y destacado** de contactos individuales.  
- 💚 **Sistema de favoritos** con toggle dinámico.  
- ➕ **Agregar contactos nuevos** mediante formulario controlado.  
- ⚡ **Validación en tiempo real** con manejo de errores.  
- 🔢 **Contador dinámico** de contactos totales y favoritos.  

---

### Funcionalidades Avanzadas (Módulo 1 + Módulo 2) 

- 🔍 **Búsqueda inteligente multi-campo** (nombre, teléfono, estado de favorito) con highlighting.  
- 🗂️ **Sistema de categorías** (Trabajo, Personal, Familia) con filtros visuales y código de colores.  
- 💾 **Persistencia de datos con LocalStorage** para mantener la información entre sesiones.  
- ✏️ **Edición de contactos existentes** usando formularios pre-poblados.  
- 🌐 **Despliegue en Netlify** con URL funcional y configuración lista para producción.  

---

### Retos Adicionales de Implementación (Módulo 2)

- 🔗 Consumo de API externa para obtener contactos iniciales y sincronizar datos.

- 🔄 Manejo de asincronía con async/await y estados de carga (loading, error).

- 🛣️ Navegación con React Router para acceder a diferentes vistas (Todos, Favoritos, Categorías).

- 🧭 Rutas dinámicas y anidadas para detalle de contacto y categorías específicas.

- 🧹 Hooks personalizados para separar la lógica de persistencia y consumo de API.

- 📱 Optimización responsive avanzada para móviles y tablets.

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

## 📜 Historias de Usuario (HU)  

### HU1: Edición de Contactos  
**Como usuario**, quiero **editar un contacto existente** para **actualizar su información cuando cambie algún dato**.  

**Criterios de Aceptación:**  
- El formulario se carga con los datos actuales del contacto.  
- Validación en tiempo real antes de guardar.  
- El contacto actualizado se guarda en LocalStorage y en la API.  

---

### HU2: Integración con API Externa  
**Como usuario**, quiero **sincronizar mis contactos con una API externa** para **acceder a mi información desde cualquier dispositivo**.  

**Criterios de Aceptación:**  
- Los datos se cargan al iniciar la app desde la API.  
- La aplicación muestra estados de carga y error si la API falla.  
- LocalStorage asegura persistencia incluso sin conexión.  

---

### HU3: Navegación por Categorías  
**Como usuario**, quiero **navegar entre diferentes vistas (Todos, Favoritos, Categorías)** para **organizar mejor mis contactos**.  

**Criterios de Aceptación:**  
- Implementación de rutas con React Router.  
- Cada vista muestra la lista filtrada según la categoría.  
- La URL refleja la ruta activa (`/favorites`, `/work`, `/personal`).  

---

👨‍💻 **Autor:** **Adriano Perez**  
📅 **Proyecto Módulo 2 - Contact Manager**  



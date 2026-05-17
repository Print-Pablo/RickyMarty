# 🧬 Rick & Morty App

Aplicación web en React que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/).

## 🚀 Tecnologías

- React 18
- React Router DOM v6
- Vite
- CSS puro (responsivo)

## 📦 Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## ✅ Funcionalidades

- Consulta de personajes desde la API de Rick and Morty
- Visualización en tarjetas (imagen, nombre, estado, especie, género)
- Navegación entre vistas con React Router
- Filtrado de personajes por especie
- Interfaz responsiva (móvil, tablet, escritorio)
- Estado de carga (spinner) y manejo de errores
- Página 404 personalizada

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── CharacterCard.jsx
│   ├── CharacterList.jsx
│   ├── FilterBar.jsx
│   └── Loader.jsx
├── pages/
│   ├── Home.jsx
│   ├── FilterBySpecies.jsx
│   └── ErrorPage.jsx
├── hooks/
│   └── useCharacters.js
├── App.jsx
├── main.jsx
└── index.css
```

## 📡 API utilizada

`https://rickandmortyapi.com/api/character`

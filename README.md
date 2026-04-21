# NŌVA — E-commerce React + Vite

Aplicación web de e-commerce desarrollada con React y Vite como parte de la Tarea 2.

## 🔗 Demo

> Agrega aquí el link de Vercel después del despliegue

## 🛠️ Tecnologías

- **React 18** — Biblioteca de UI
- **Vite 5** — Herramienta de desarrollo y bundler
- **React Router DOM 6** — Navegación entre páginas
- **JavaScript ES6+** — Lógica y funciones
- **CSS puro** — Estilos y diseño responsive

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx        # Barra de navegación con carrito
│   ├── Footer.jsx        # Pie de página
│   ├── ProductCard.jsx   # Tarjeta de producto reutilizable
│   ├── CartDrawer.jsx    # Panel lateral del carrito
│   └── CategoryFilter.jsx # Filtros por categoría
├── context/
│   └── CartContext.jsx   # Estado global del carrito (Context API)
├── data/
│   └── products.js       # Datos de los 8 productos
├── hooks/
│   └── useProducts.js    # Hook personalizado para filtrar/ordenar
├── pages/
│   ├── Home.jsx          # Página de inicio con hero y destacados
│   ├── Products.jsx      # Catálogo completo con búsqueda y filtros
│   └── About.jsx         # Página "Nosotros"
├── utils/
│   └── formatPrice.js    # Utilidad para formato de moneda COP
├── App.jsx               # Enrutador principal
├── main.jsx              # Punto de entrada
└── index.css             # Estilos globales
```

## ⚙️ Funcionalidades

- ✅ **8 productos** con imagen, nombre, precio, descripción y categoría
- ✅ **Carrito de compras** — agregar, eliminar, ajustar cantidad
- ✅ **Contador de items** en el ícono del carrito
- ✅ **Búsqueda** de productos en tiempo real
- ✅ **Filtros por categoría** (muebles, iluminación, decoración, textiles)
- ✅ **Ordenamiento** por precio y nombre
- ✅ **Navegación** entre 3 páginas con React Router
- ✅ **Diseño responsive** para móvil y escritorio
- ✅ **Hook personalizado** `useProducts` con `useMemo`
- ✅ **Context API** para estado global del carrito

## 🚀 Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/nova-ecommerce.git
cd nova-ecommerce

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Build para producción
npm run build
```

## ☁️ Despliegue en Vercel

1. Subir el proyecto a GitHub
2. Ir a [vercel.com](https://vercel.com) → **Add New Project**
3. Importar el repositorio de GitHub
4. Vercel detecta Vite automáticamente
5. Clic en **Deploy** ✅

## 👤 Autor

> Tu nombre aquí

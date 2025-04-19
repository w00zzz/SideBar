# TreeView

Un componente moderno y responsive de navegación lateral construido con React, TypeScript y Material UI. Este proyecto proporciona una barra lateral plegable con capacidades de navegación multinivel, perfecta para paneles de administración y aplicaciones web complejas.

## Características

- **Barra Lateral Plegable**: Alterna entre estados expandidos y colapsados
- **Navegación Multinivel**: Soporte para elementos de menú anidados a cualquier profundidad
- **Interacciones al Pasar el Cursor**: Los submenús aparecen al pasar el cursor o hacer clic
- **Diseño Responsive**: Se adapta a diferentes tamaños de pantalla
- **Integración con Material UI**: Utiliza componentes MUI para un estilo consistente
- **Soporte TypeScript**: Completamente tipado para una mejor experiencia de desarrollo

## Stack Tecnológico

- **React**: Biblioteca UI para construir interfaces basadas en componentes
- **TypeScript**: Tipado estático para mejorar la calidad del código
- **Material UI**: Biblioteca de componentes para un diseño consistente
- **Vite**: Herramienta de construcción rápida y servidor de desarrollo
- **Soporte PWA**: Capacidades de Aplicación Web Progresiva
- **React Router**: Navegación y enrutamiento
- **Recoil**: Gestión de estado

## Estructura del Proyecto

```
src/
├── components/
│   ├── v2/
│   │   ├── Sidebar/
│   │   │   ├── SidebarCollapsedMenu/
│   │   │   │   ├── SidebarCollapsedMenu.tsx    # Contenedor principal del menú colapsado
│   │   │   │   ├── SidebarCollapsedMenuItem.tsx # Elemento individual del menú con popover
│   │   │   │   └── SubMenu.tsx                 # Componente de submenú anidado
├── interfaces/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   └── Sidebar.types.ts               # Definiciones de tipos para componentes de la barra lateral
```

## Comenzando

### Prerrequisitos

- Node.js (v18 o superior recomendado)
- Yarn o npm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd TreeView

# Instalar dependencias
yarn install
# o
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
yarn dev
# o
npm run dev
```

La aplicación estará disponible en http://localhost:8080 (o el puerto especificado por Vite).

### Compilación para Producción

```bash
# Compilar la aplicación
yarn build
# o
npm run build

# Vista previa de la compilación de producción
yarn preview
# o
npm run preview
```

## Uso

### Uso Básico

El componente principal es `Sidebar`, que utiliza `SidebarCollapsedMenu` como uno de sus componentes internos. Así es como se usa en tu aplicación:

```tsx
import { Sidebar } from './components/v2/Sidebar';

const routes = {
  dashboard: {
    title: 'Dashboard',
    icon: DashboardIcon,
    path: '/dashboard',
    component: DashboardComponent
  },
  settings: {
    title: 'Configuración',
    icon: SettingsIcon,
    path: '/settings',
    component: SettingsComponent,
    subPath: {
      profile: {
        title: 'Perfil',
        path: '/settings/profile',
        component: ProfileComponent
      },
      account: {
        title: 'Cuenta',
        path: '/settings/account',
        component: AccountComponent
      }
    }
  }
};

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar routes={routes} />
      <main>
        {/* Tu contenido principal aquí */}
      </main>
    </div>
  );
}
```

## Documentación de Componentes

### Sidebar

El componente contenedor principal para todo el sistema de navegación lateral. Este componente aún está en desarrollo e incluirá características adicionales en el futuro.

**Props:**
- `routes`: Objeto que contiene la estructura de navegación con títulos, iconos, rutas y componentes

### SidebarCollapsedMenu

Un subcomponente de Sidebar que maneja el estado colapsado del menú lateral.

**Props:**
- `routes`: Objeto que contiene la estructura de navegación con títulos, iconos y rutas

### SidebarCollapsedMenuItem

Representa un elemento individual en la barra lateral colapsada.

**Props:**
- `handleClick`: Función para manejar eventos de clic
- `icon`: Componente React para el icono del elemento del menú
- `routes`: Rutas de submenú opcionales
- `title`: Etiqueta de texto para el elemento del menú

### SubMenu

Maneja menús de navegación anidados.

**Props:**
- `routes`: Objeto que contiene elementos del submenú
- `onItemClick`: Función para manejar la selección de elementos
- `onClose`: Función para cerrar el submenú
- `parentTitle`: Título opcional del menú padre
- `level`: Nivel de anidación actual (usado para comportamiento jerárquico)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

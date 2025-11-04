# 🇩🇴 PropuestasRD

Portal neutral e informativo de propuestas políticas de todos los partidos de la República Dominicana para las elecciones 2028.

## 🚀 Pasos para Lanzar la Aplicación

### 1️⃣ Verificar Instalación de Dependencias

Las dependencias ya están instaladas (node_modules existe), pero si necesitas reinstalarlas:

```bash
pnpm install
```

### 2️⃣ Iniciar el Servidor de Desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en: **http://localhost:3000**

### 3️⃣ Construir para Producción

```bash
pnpm build
```

### 4️⃣ Iniciar en Modo Producción

```bash
pnpm start
```

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en http://localhost:3000 |
| `pnpm build` | Genera la versión optimizada para producción |
| `pnpm start` | Inicia el servidor en modo producción |
| `pnpm lint` | Ejecuta el linter para verificar el código |

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.2.4 (App Router)
- **UI**: React 18.3.1 + TypeScript 5
- **Estilos**: Tailwind CSS 4.1.9
- **Componentes**: Shadcn/UI + Radix UI
- **Iconos**: Lucide React
- **Tipografía**: Geist Font
- **Formularios**: React Hook Form + Zod
- **Analytics**: Vercel Analytics

## 📁 Estructura del Proyecto

```
propuestas-rd/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout principal
│   ├── auth/              # Autenticación (placeholder)
│   ├── contacto/          # Página de contacto
│   ├── noticias/          # Sección de noticias
│   ├── partidos/          # Listado de partidos
│   └── propuestas/[id]/   # Detalle de propuestas
├── components/            # Componentes reutilizables
│   ├── header.tsx        # Navegación principal
│   ├── footer.tsx        # Footer del sitio
│   ├── proposal-card.tsx # Tarjeta de propuesta
│   ├── filter-sidebar.tsx # Filtros de búsqueda
│   └── ui/               # Componentes UI de Shadcn
├── lib/                  # Utilidades
│   └── utils.ts         # Funciones auxiliares
└── public/              # Archivos estáticos
    └── logo.png        # Logo de la aplicación
```

## 🎨 Características Actuales

✅ **Implementado:**
- Página principal con grid de propuestas
- Sistema de filtros (partidos y temas)
- Detalle de propuestas individual
- Header con navegación
- Footer con enlaces
- Diseño responsive
- Modo oscuro/claro
- **Panel de administración protegido con login**
- **Sistema de autenticación con JWT**
- **API REST completa para CRUD de propuestas**
- **Almacenamiento en JSON** (fácil migración a BD)
- **Notificaciones toast** para feedback

⚠️ **Pendiente:**
- Conexión a base de datos real
- Páginas: /partidos, /noticias, /contacto completas
- Sistema de búsqueda funcional
- Paginación
- Menú mobile
- Editor WYSIWYG para descripciones
- Subida de imágenes

## 🎯 Partidos Políticos Configurados

| Partido | Color |
|---------|-------|
| PRM | Verde #00A651 |
| PLD | Morado #8B4789 |
| Fuerza del Pueblo | Naranja #FF6B35 |
| PRSC | Rojo #DC143C |

## 📊 Temas de Propuestas

- Educación
- Economía
- Salud
- Transporte
- Seguridad
- Medio Ambiente
- Tecnología
- Turismo

## 🔧 Configuración

El proyecto utiliza:
- **TypeScript** con configuración estricta
- **ESLint** (ignorado durante builds)
- **Tailwind CSS** con variables CSS personalizadas
- **Shadcn/UI** con estilo "New York"

### 🔐 Configuración de Autenticación

El panel de administración está protegido con usuario y contraseña. Para configurar las credenciales:

1. Copia el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

2. Edita `.env.local` y cambia las credenciales:
```bash
ADMIN_USERNAME=tu-usuario
ADMIN_PASSWORD=tu-contraseña-segura
JWT_SECRET=tu-clave-secreta-super-segura-aleatoria
```

3. **Credenciales por defecto**:
   - Usuario: `admin`
   - Contraseña: `PropuestasRD2028!`
   
   ⚠️ **IMPORTANTE**: Cambia estas credenciales antes de desplegar en producción.

4. **Acceso al panel de administración**:
   - Login: http://localhost:3000/admin/login
   - Panel: http://localhost:3000/admin (requiere autenticación)

## 🌐 Despliegue

### Vercel (Recomendado)

1. Push el código a GitHub
2. Importar el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Deploy con un click

### Otros Proveedores

Asegúrate de configurar:
- Node.js 18+
- Comando de build: `pnpm build`
- Comando de start: `pnpm start`
- Directorio de salida: `.next`

## 📝 Próximos Pasos Recomendados

1. **Base de Datos**: Implementar Prisma + PostgreSQL/MongoDB
2. **Autenticación**: NextAuth.js o Supabase Auth
3. **CMS**: Panel de administración para gestionar propuestas
4. **Búsqueda**: Implementar búsqueda con Algolia o similar
5. **SEO**: Mejorar metadata y Open Graph tags
6. **API**: Crear endpoints para CRUD de propuestas

## 📄 Licencia

Proyecto de código abierto para promover la transparencia política en República Dominicana.

---

**Desarrollado con ❤️ para la democracia dominicana** 🇩🇴

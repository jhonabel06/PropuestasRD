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
- Página principal con grid de propuestas y filtros funcionales
- **Página `/propuestas` con lista completa** y búsqueda en tiempo real
- Sistema de filtros dinámicos (partidos activos y temas)
- **Colores de partidos sincronizados automáticamente** en todas las propuestas
- Detalle de propuestas individual
- Header con navegación
- Footer con enlaces
- Diseño responsive
- Modo oscuro/claro
- **Panel de administración protegido con login**
- **Sistema de autenticación con JWT**
- **API REST completa para CRUD de propuestas**
- **API REST completa para CRUD de partidos políticos**
- **Gestión dinámica de partidos** (crear, editar, eliminar)
- **Actualización automática de colores** cuando se modifica un partido
- **Filtros muestran solo partidos activos** en formularios
- **Almacenamiento en JSON** (fácil migración a BD)
- **Notificaciones toast** para feedback
- **Interface con tabs** para organizar propuestas y partidos
- **Búsqueda en tiempo real** por título, resumen y autor

⚠️ **Pendiente:**
- Conexión a base de datos real
- Páginas: /partidos, /noticias, /contacto completas
- Paginación
- Menú mobile
- Editor WYSIWYG para descripciones
- Subida de imágenes

## 🔄 Sistema de Colores Dinámicos

El sistema actualiza automáticamente los colores de los partidos en las propuestas:

- **Sincronización automática**: Al cambiar el color de un partido, todas sus propuestas se actualizan instantáneamente
- **Sin duplicación**: Los colores se consultan dinámicamente desde la base de datos de partidos
- **Función centralizada**: `lib/getPartidoColor.ts` maneja toda la lógica de colores
- **Actualización en tiempo real**: El panel admin recarga las propuestas al actualizar un partido

### Cómo funciona:
1. Las propuestas se enriquecen con `enrichPropuestasWithColors()` al cargarlas
2. Esta función busca el color actual del partido en la base de datos
3. No se guarda el color en cada propuesta, solo la referencia al partido
4. Los cambios se reflejan automáticamente en toda la aplicación

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

## 📝 Gestión de Propuestas

### Ejemplo de HTML para Descripciones

Las descripciones de propuestas soportan HTML para un formato rico. Aquí tienes una plantilla completa:

```html
<h2>Resumen Ejecutivo</h2>
<p>Descripción general de la propuesta que explica los objetivos principales y el impacto esperado en la población dominicana.</p>

<h2>Objetivos Principales</h2>
<ul>
  <li>Primer objetivo específico y medible</li>
  <li>Segundo objetivo con metas claras</li>
  <li>Tercer objetivo con indicadores de éxito</li>
  <li>Cuarto objetivo con resultados esperados</li>
</ul>

<h2>Fases de Implementación</h2>
<p><strong>Fase 1 (Año 1):</strong> Diagnóstico nacional de infraestructura y capacitación inicial en escuelas piloto.</p>
<p><strong>Fase 2 (Año 2-3):</strong> Expansión del programa a nivel nacional y desarrollo de contenido específico.</p>
<p><strong>Fase 3 (Año 4-5):</strong> Consolidación, evaluación de impacto y ajustes necesarios.</p>

<h2>Presupuesto Estimado</h2>
<p>El programa requiere una inversión de <strong>RD$3,500 millones</strong> distribuidos en cinco años, financiados mediante el presupuesto nacional y cooperación internacional.</p>

<h2>Beneficiarios Directos</h2>
<ul>
  <li>500,000 estudiantes de escuelas públicas</li>
  <li>20,000 docentes capacitados</li>
  <li>1,500 instituciones educativas</li>
</ul>

<h2>Impacto Esperado</h2>
<p>Se espera que al finalizar el programa, el <strong>95% de los estudiantes</strong> de escuelas públicas tengan competencias digitales básicas, mejorando su empleabilidad futura y reduciendo la desigualdad educativa.</p>

<h2>Indicadores de Éxito</h2>
<ol>
  <li>Porcentaje de estudiantes con acceso a tecnología</li>
  <li>Nivel de competencias digitales adquiridas</li>
  <li>Satisfacción de docentes con la capacitación</li>
  <li>Mejora en rendimiento académico en áreas STEM</li>
</ol>

<h2>Fuentes de Financiamiento</h2>
<p>Este proyecto será financiado mediante:</p>
<ul>
  <li>Presupuesto Nacional de Educación (60%)</li>
  <li>Cooperación Internacional (30%)</li>
  <li>Alianzas Público-Privadas (10%)</li>
</ul>
```

### Etiquetas HTML Soportadas

| Etiqueta | Uso | Ejemplo |
|----------|-----|---------|
| `<h2>`, `<h3>` | Títulos de secciones | `<h2>Objetivos</h2>` |
| `<p>` | Párrafos de texto | `<p>Descripción...</p>` |
| `<ul>`, `<li>` | Listas sin orden | `<ul><li>Item</li></ul>` |
| `<ol>`, `<li>` | Listas ordenadas | `<ol><li>Primero</li></ol>` |
| `<strong>`, `<b>` | Texto en negrita | `<strong>Importante</strong>` |
| `<em>`, `<i>` | Texto en cursiva | `<em>Énfasis</em>` |
| `<a href="">` | Enlaces externos | `<a href="url">Texto</a>` |
| `<blockquote>` | Citas textuales | `<blockquote>Cita</blockquote>` |

### Consejos para Descripciones Efectivas

✅ **Usa estructura clara**: Divide en secciones con `<h2>`  
✅ **Listas para objetivos**: Facilita la lectura  
✅ **Números concretos**: Incluye cifras y porcentajes  
✅ **Negritas para énfasis**: Resalta datos clave con `<strong>`  
✅ **Fases claras**: Especifica timeline de implementación  
✅ **Impacto medible**: Indica indicadores de éxito  

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

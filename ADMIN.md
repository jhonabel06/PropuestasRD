# 🔐 Sistema de Administración - PropuestasRD

## Acceso al Sistema

### URLs de Acceso
- **Login**: http://localhost:3000/admin/login
- **Panel de Admin**: http://localhost:3000/admin

### Credenciales por Defecto
```
Usuario: admin
Contraseña: PropuestasRD2028!
```

⚠️ **IMPORTANTE**: Estas son credenciales de desarrollo. Cámbialas antes de desplegar en producción.

---

## 🔧 Configuración de Credenciales

### 1. Crear archivo de variables de entorno

Copia el archivo de ejemplo:
```bash
cp .env.example .env.local
```

### 2. Editar credenciales

Abre `.env.local` y configura tus credenciales seguras:

```env
# Credenciales de Administrador
ADMIN_USERNAME=tu-usuario-seguro
ADMIN_PASSWORD=TuContraseñaSuperSegura123!

# Clave secreta para JWT (genera una aleatoria)
JWT_SECRET=clave-aleatoria-muy-larga-y-segura-para-jwt
```

### 3. Generar clave JWT segura

Puedes generar una clave segura con Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

O usa un generador online: https://generate-secret.vercel.app/32

---

## 📚 Funcionalidades del Panel de Admin

### ✅ Crear Nueva Propuesta

1. Click en **"Nueva Propuesta"**
2. Completa los campos:
   - **Partido** (requerido): Selecciona PRM, PLD, Fuerza del Pueblo o PRSC
   - **Tema** (requerido): Educación, Salud, Economía, etc.
   - **Título** (requerido): Nombre de la propuesta
   - **Resumen** (requerido): Descripción breve (aparece en tarjetas)
   - **Descripción Completa** (opcional): Contenido detallado con HTML
   - **Autor** (opcional): Ej: "Comisión de Educación - PRM"
   - **Fecha** (opcional): Fecha de publicación
   - **Fuente Oficial** (opcional): URL del documento original

3. Click en **"Crear Propuesta"**
4. La propuesta aparece inmediatamente en la página principal

### ✏️ Editar Propuesta

1. Click en el ícono de **lápiz (✏️)** junto a la propuesta
2. Modifica los campos necesarios
3. Click en **"Actualizar Propuesta"**

### 🗑️ Eliminar Propuesta

1. Click en el ícono de **papelera (🗑️)**
2. Confirma la eliminación en el diálogo
3. La propuesta se elimina permanentemente

### 🚪 Cerrar Sesión

Click en el botón **"Cerrar Sesión"** en la esquina superior derecha del panel.

---

## 🎨 Formato de Descripciones

Las descripciones completas soportan HTML. Aquí tienes un ejemplo:

```html
<h2>Resumen Ejecutivo</h2>
<p>Descripción general de la propuesta que explica los objetivos principales y el impacto esperado en la población dominicana.</p>

<h2>Objetivos Principales</h2>
<ul>
  <li>Primer objetivo específico y medible</li>
  <li>Segundo objetivo con metas claras</li>
  <li>Tercer objetivo con indicadores de éxito</li>
</ul>

<h2>Fases de Implementación</h2>
<p><strong>Fase 1 (Año 1):</strong> Descripción de la primera fase con actividades específicas.</p>
<p><strong>Fase 2 (Año 2-3):</strong> Expansión y consolidación del programa.</p>
<p><strong>Fase 3 (Año 4-5):</strong> Evaluación de impacto y ajustes necesarios.</p>

<h2>Presupuesto Estimado</h2>
<p>El programa requiere una inversión de RD$X millones distribuidos en Y años.</p>

<h2>Impacto Esperado</h2>
<p>Descripción del impacto social, económico o político esperado al completar la propuesta.</p>
```

### Etiquetas HTML Permitidas

- `<h2>`, `<h3>` - Títulos de secciones
- `<p>` - Párrafos
- `<ul>`, `<ol>`, `<li>` - Listas
- `<strong>`, `<b>` - Texto en negrita
- `<em>`, `<i>` - Texto en cursiva
- `<a href="">` - Enlaces
- `<blockquote>` - Citas

---

## 🔒 Seguridad

### Características de Seguridad Implementadas

✅ **JWT (JSON Web Tokens)**: Tokens seguros con expiración de 24 horas
✅ **HTTP-Only Cookies**: Las cookies no son accesibles desde JavaScript del cliente
✅ **Verificación en cada petición**: El servidor valida la autenticación
✅ **Redirección automática**: Si no estás autenticado, te redirige al login
✅ **Variables de entorno**: Las credenciales no están en el código

### Mejoras de Seguridad Recomendadas

Para producción, considera:

1. **Hashing de contraseñas**: Usa bcrypt para hashear contraseñas
2. **Rate limiting**: Limita intentos de login fallidos
3. **2FA (Two-Factor Authentication)**: Agrega verificación en dos pasos
4. **HTTPS**: Asegúrate de usar SSL/TLS en producción
5. **CORS**: Configura CORS apropiadamente
6. **Base de datos**: Migra a una BD real con usuarios múltiples
7. **Roles y permisos**: Implementa sistema de roles (admin, editor, viewer)

---

## 🗄️ Almacenamiento de Datos

Actualmente, las propuestas se guardan en:
```
/data/propuestas.json
```

Este es un archivo JSON simple que facilita el desarrollo y pruebas.

### Migración a Base de Datos

Para producción, se recomienda migrar a:

- **PostgreSQL** con Prisma ORM
- **MongoDB** con Mongoose
- **Supabase** (PostgreSQL + Auth + Storage)
- **PlanetScale** (MySQL serverless)

---

## 🚀 Despliegue en Producción

### Antes de Desplegar

1. ✅ Cambia las credenciales en las variables de entorno del hosting
2. ✅ Genera una clave JWT segura y aleatoria
3. ✅ Configura HTTPS (obligatorio para cookies seguras)
4. ✅ Revisa que `.env.local` esté en `.gitignore`
5. ✅ Considera migrar a una base de datos real

### Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `ADMIN_USERNAME`: Tu usuario
   - `ADMIN_PASSWORD`: Tu contraseña segura
   - `JWT_SECRET`: Clave aleatoria larga

### Variables de Entorno en Netlify

1. Site settings → Environment variables
2. Agrega las mismas variables mencionadas arriba

---

## 📞 Soporte

Si tienes problemas con el sistema de administración:

1. Verifica que las variables de entorno estén configuradas
2. Revisa la consola del navegador para errores
3. Verifica que el servidor esté corriendo
4. Limpia las cookies del navegador si tienes problemas de login

---

## 🔄 Actualización del Sistema

Para actualizar las dependencias:

```bash
pnpm update
```

Para agregar nuevas funcionalidades de seguridad:

```bash
pnpm add bcrypt
pnpm add -D @types/bcrypt
```

---

**Desarrollado con ❤️ para la democracia dominicana** 🇩🇴

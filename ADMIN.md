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

Las descripciones completas soportan HTML. Aquí tienes ejemplos completos:

### 📘 Ejemplo 1: Propuesta de Educación

```html
<h2>Resumen Ejecutivo</h2>
<p>El Plan Nacional de Alfabetización Digital busca cerrar la brecha tecnológica en el sistema educativo dominicano, garantizando que todos los estudiantes de escuelas públicas tengan acceso a herramientas digitales y desarrollen competencias tecnológicas esenciales para el siglo XXI.</p>

<h2>Objetivos Principales</h2>
<ul>
  <li>Equipar 5,000 aulas con computadoras y acceso a internet de alta velocidad</li>
  <li>Capacitar a 20,000 docentes en metodologías de enseñanza digital</li>
  <li>Desarrollar contenido educativo digital adaptado al currículo nacional</li>
  <li>Implementar plataformas de aprendizaje en línea accesibles para todos los estudiantes</li>
</ul>

<h2>Fases de Implementación</h2>
<p><strong>Fase 1 (Año 1):</strong> Diagnóstico nacional de infraestructura tecnológica y capacitación inicial de docentes en 500 escuelas piloto.</p>
<p><strong>Fase 2 (Año 2-3):</strong> Expansión del programa a 2,000 escuelas adicionales y desarrollo de contenido educativo digital.</p>
<p><strong>Fase 3 (Año 4-5):</strong> Cobertura nacional completa y evaluación de impacto en el aprendizaje estudiantil.</p>

<h2>Presupuesto Estimado</h2>
<p>El programa requiere una inversión de <strong>RD$3,500 millones</strong> distribuidos en cinco años, financiados mediante el presupuesto nacional de educación y cooperación internacional.</p>

<h2>Impacto Esperado</h2>
<p>Se espera que al finalizar el programa, el <strong>95% de los estudiantes</strong> de escuelas públicas tengan competencias digitales básicas, mejorando su empleabilidad futura y reduciendo la desigualdad educativa.</p>
```

### 🏥 Ejemplo 2: Propuesta de Salud

```html
<h2>Contexto</h2>
<p>El sistema de salud pública dominicano requiere una modernización urgente para garantizar atención médica de calidad a toda la población.</p>

<h2>Componentes del Programa</h2>
<h3>1. Infraestructura Hospitalaria</h3>
<ul>
  <li>Renovación de 50 hospitales públicos en todo el país</li>
  <li>Construcción de 10 nuevos centros de atención primaria</li>
  <li>Modernización de equipos médicos en 200 centros de salud</li>
</ul>

<h3>2. Recursos Humanos</h3>
<ul>
  <li>Contratación de 5,000 nuevos profesionales de salud</li>
  <li>Capacitación continua del personal existente</li>
  <li>Mejora salarial del 30% para médicos y enfermeras</li>
</ul>

<h3>3. Cobertura del Seguro Nacional</h3>
<ul>
  <li>Ampliación a 2 millones de nuevos afiliados</li>
  <li>Inclusión de medicamentos para enfermedades crónicas</li>
  <li>Reducción de tiempos de espera en un 50%</li>
</ul>

<h2>Cronograma de Ejecución</h2>
<ol>
  <li><strong>2025:</strong> Diagnóstico y planificación detallada</li>
  <li><strong>2026-2027:</strong> Fase de construcción y renovación</li>
  <li><strong>2028:</strong> Implementación completa y evaluación</li>
</ol>

<h2>Metas Cuantificables</h2>
<p>Al finalizar el programa:</p>
<ul>
  <li>Reducción de la mortalidad infantil en un 25%</li>
  <li>Aumento de la cobertura de salud al 85% de la población</li>
  <li>Disminución del tiempo promedio de espera de 4 horas a 1.5 horas</li>
</ul>

<blockquote>
"La salud es un derecho fundamental de todos los dominicanos, y este programa garantiza su acceso universal."
</blockquote>
```

### 🚇 Ejemplo 3: Propuesta de Transporte

```html
<h2>Proyecto Metro Línea 3 - Santo Domingo</h2>

<h2>Descripción General</h2>
<p>Construcción de la tercera línea del Metro de Santo Domingo que conectará los sectores del norte de la ciudad con el centro histórico, beneficiando directamente a más de <strong>500,000 ciudadanos</strong>.</p>

<h2>Ruta y Estaciones</h2>
<p>La Línea 3 contará con <strong>15 estaciones estratégicamente ubicadas</strong>:</p>
<ul>
  <li>Villa Mella (Inicio)</li>
  <li>Los Mina</li>
  <li>Ciudad Juan Bosch</li>
  <li>Charles de Gaulle</li>
  <li>San Carlos</li>
  <li>...y 10 estaciones adicionales</li>
  <li>Zona Colonial (Final)</li>
</ul>

<h2>Especificaciones Técnicas</h2>
<ul>
  <li><strong>Longitud total:</strong> 28 kilómetros</li>
  <li><strong>Capacidad:</strong> 20,000 pasajeros por hora por dirección</li>
  <li><strong>Tiempo de recorrido:</strong> 45 minutos extremo a extremo</li>
  <li><strong>Frecuencia:</strong> Trenes cada 3-5 minutos en hora pico</li>
</ul>

<h2>Inversión y Financiamiento</h2>
<p>Inversión total estimada: <strong>US$1,200 millones</strong></p>
<ul>
  <li>Gobierno Dominicano: 40%</li>
  <li>Banco Mundial: 35%</li>
  <li>BID: 25%</li>
</ul>

<h2>Beneficios Proyectados</h2>
<ol>
  <li>Reducción del tráfico vehicular en un 30%</li>
  <li>Ahorro promedio de 1 hora diaria por usuario</li>
  <li>Disminución de emisiones de CO2 en 50,000 toneladas anuales</li>
  <li>Generación de 8,000 empleos directos durante la construcción</li>
  <li>3,000 empleos permanentes para operación</li>
</ol>

<h2>Cronograma</h2>
<p><strong>Inicio de obras:</strong> Enero 2026</p>
<p><strong>Inauguración proyectada:</strong> Diciembre 2029</p>
<p><strong>Duración total:</strong> 4 años</p>
```

### 💼 Ejemplo 4: Propuesta Económica

```html
<h2>Incentivos Fiscales para PYMES</h2>

<h2>Objetivo</h2>
<p>Fortalecer el sector de pequeñas y medianas empresas mediante incentivos fiscales y facilidades de financiamiento durante los primeros años de operación.</p>

<h2>Beneficios del Programa</h2>

<h3>Incentivos Fiscales</h3>
<ul>
  <li><strong>Año 1:</strong> Exención total del Impuesto Sobre la Renta (ISR)</li>
  <li><strong>Año 2:</strong> 50% de reducción en ISR</li>
  <li><strong>Año 3:</strong> 25% de reducción en ISR</li>
  <li><strong>Todos los años:</strong> Exención de ITBIS en compra de equipos productivos</li>
</ul>

<h3>Facilidades de Crédito</h3>
<ul>
  <li>Líneas de crédito con tasas preferenciales del 8% anual</li>
  <li>Período de gracia de 12 meses</li>
  <li>Plazo de pago hasta 10 años</li>
  <li>Sin requerimiento de garantías para montos menores a RD$5 millones</li>
</ul>

<h3>Capacitación y Asesoría</h3>
<ul>
  <li>Programas gratuitos de formación empresarial</li>
  <li>Asesoría legal y contable subsidiada al 70%</li>
  <li>Mentoría con empresarios exitosos</li>
</ul>

<h2>Requisitos de Elegibilidad</h2>
<ol>
  <li>Empresa registrada hace menos de 3 años</li>
  <li>Facturación anual menor a RD$30 millones</li>
  <li>Entre 5 y 50 empleados</li>
  <li>Estar al día con obligaciones fiscales</li>
  <li>Operar en sectores prioritarios (tecnología, manufactura, agroalimentario)</li>
</ol>

<h2>Meta del Programa</h2>
<p>Apoyar a <strong>10,000 PYMES</strong> en los primeros 3 años, generando:</p>
<ul>
  <li>50,000 nuevos empleos formales</li>
  <li>Aumento del 15% en el PIB del sector PYME</li>
  <li>Reducción de la informalidad empresarial en un 20%</li>
</ul>

<p><em>Para más información, consulta la Ley de Fomento a las PYMES No. XXX-2025</em></p>
```

### Etiquetas HTML Permitidas

| Etiqueta | Descripción | Ejemplo |
|----------|-------------|---------|
| `<h2>`, `<h3>` | Títulos y subtítulos | `<h2>Objetivos</h2>` |
| `<p>` | Párrafos | `<p>Texto descriptivo...</p>` |
| `<ul>`, `<li>` | Listas sin orden | `<ul><li>Item</li></ul>` |
| `<ol>`, `<li>` | Listas numeradas | `<ol><li>Paso 1</li></ol>` |
| `<strong>`, `<b>` | Texto en negrita | `<strong>Importante</strong>` |
| `<em>`, `<i>` | Texto en cursiva | `<em>Énfasis</em>` |
| `<a href="">` | Enlaces | `<a href="url">Link</a>` |
| `<blockquote>` | Citas | `<blockquote>Cita...</blockquote>` |

### 💡 Consejos para Escribir Descripciones Efectivas

✅ **Estructura clara**: Usa `<h2>` para dividir en secciones principales  
✅ **Datos concretos**: Incluye números, porcentajes y cifras específicas  
✅ **Listas para objetivos**: Facilita la lectura y comprensión  
✅ **Negritas para destacar**: Usa `<strong>` en datos clave como presupuestos  
✅ **Cronología clara**: Especifica fases con años o períodos  
✅ **Beneficiarios definidos**: Indica quiénes se beneficiarán  
✅ **Metas medibles**: Establece indicadores cuantificables  
✅ **Fuentes de financiamiento**: Especifica origen de recursos  

### ⚠️ Evita

❌ HTML complejo o no soportado (`<div>`, `<span>`, `<table>`)  
❌ JavaScript o scripts  
❌ Estilos inline excesivos  
❌ Descripciones muy extensas (máximo 2000 palabras)  
❌ Texto sin estructura (todo en un solo párrafo)  

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

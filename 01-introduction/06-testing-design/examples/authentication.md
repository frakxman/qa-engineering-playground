# Authentication — Login

## Requirement

A registered user can log in with valid credentials.

## Scope

Validate the login functionality using valid and invalid authentication data.

## Test Cases

### AUTH-001

**Título:** Email válido + contraseña válida

**Precondición:**
- El usuario está registrado.
- El email existe en el sistema.

**Datos:**
- Email: `usuario@test.com`
- Contraseña: `PasswordValido`

**Acción:**
1. Acceder a `/auth/login`.
2. Introducir el email registrado.
3. Introducir la contraseña válida.
4. Presionar el botón de iniciar sesión.

**Resultado esperado:**
- El login es exitoso.
- El usuario queda autenticado.
- Se obtiene un `access_token`.
- El usuario puede acceder a las funcionalidades protegidas.

---

### AUTH-002

**Título:** Rechazar inicio de sesión con contraseña incorrecta

**Precondición:**
- El usuario está registrado.
- El email existe en el sistema.

**Datos:**
- Email: `usuario@test.com`
- Contraseña: `PasswordIncorrecta`

**Acción:**
1. Acceder a `/auth/login`.
2. Introducir el email registrado.
3. Introducir una contraseña incorrecta.
4. Presionar el botón de iniciar sesión.

**Resultado esperado:**
- El login es rechazado.
- No se obtiene un `access_token`.
- El usuario no queda autenticado.
- La API devuelve un error de autenticación.

---

### AUTH-003

**Título:** Email inexistente + contraseña válida

**Precondición:**
- El email no está registrado.
- La contraseña utilizada es válida.

**Datos:**
- Email: `usuario1@test.com`
- Contraseña: `PasswordValido`

**Acción:**
1. Acceder a `/auth/login`.
2. Introducir el email.
3. Introducir la contraseña.
4. Presionar el botón de iniciar sesión.

**Resultado esperado:**
- El login no es exitoso.
- El backend rechaza las credenciales.
- No se obtiene información del usuario.
- El usuario no queda autenticado.

---

### AUTH-004

**Título:** Email inexistente + contraseña incorrecta

**Precondición:**
- El email no está registrado.

**Datos:**
- Email: `usuario1@test.com`
- Contraseña: `PasswordInvalida`

**Acción:**
1. Acceder a `/auth/login`.
2. Introducir el email.
3. Introducir la contraseña.
4. Presionar el botón de iniciar sesión.

**Resultado esperado:**
- El login no es exitoso.
- El backend rechaza las credenciales.
- No se obtiene información del usuario.
- El usuario no queda autenticado.
- La respuesta HTTP es `403 Forbidden`.

---

### AUTH-005

**Título:** Email vacío

**Precondición:**
- El campo email no está diligenciado.

**Datos:**
- Email: vacío.

**Acción:**
1. Acceder a `/auth/login`.
2. Dejar el campo email vacío.
3. Presionar el botón de iniciar sesión.

**Resultado esperado:**
- El formulario muestra un mensaje indicando que el campo es obligatorio.
- Angular realiza la validación.
- El frontend no envía la petición al backend.
- No se obtiene información del usuario.

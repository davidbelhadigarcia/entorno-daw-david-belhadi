# Documentación de mi entorno de desarrollo · Práctica 2

**Nombre y apellidos:**
**URL de mi repositorio:**

> Rellena cada apartado a medida que avanzas. Donde pone «pega aquí», copia el texto
> de la terminal (no hace falta captura). Escribe con tus palabras: no se valora la longitud,
> sino que se note que entiendes lo que has hecho.

---

## 1. Instalación de entornos (CE 2.a)

### 1.1. Entorno vacío (paso 3)

Resultado de `java -version` y `node -v` **antes** de instalar nada:

```
java: command not found
node: command not found
```

¿Por qué crees que aparece ese mensaje? (relaciónalo con la diapositiva «Problemas habituales del entorno»)

Aparece porque Java y Node.js no estaban instalados en el entorno inicial. 
> 

### 1.2. Después de la 1.ª reconstrucción (paso 5)

Resultado de `java -version`, `node -v` y `jupyter lab --version` **después**:

```
Java: versión 27
Node.js: v24.22.1
JupyterLab: 4.6.4
```

¿Qué líneas nuevas han aparecido en `devcontainer.json`? Explica con tus palabras qué hace cada una:

> Se añadieron las configuraciones de Java, Node.js y Python con JupyterLab. Java permite compilar y ejecutar programas Java; Node.js permite ejecutar JavaScript y utilizar herramientas como npm; y Python con JupyterLab permite trabajar con notebooks y código Python. Al reconstruir el contenedor, estas herramientas se instalan automáticamente.

### 1.3. Comparativa de los dos IDE (paso 6)

|                                         | Editor de GitHub Codespaces | JupyterLab |
|-----------------------------------------|-----------------------------|------------|
| ¿Libre o propietario?                   |        Propietario                     |       Libre     |
| Licencia / empresa o comunidad          |     Microsoft                         |  BSD 3-Clause / Proyecto Jupyter          |
| ¿Tiene coste? ¿Con qué límites?         | Sí, con horas gratuitas limitadas                            |        Gratuito    |
| ¿Se puede usar fuera de GitHub?         |         No                    |        Sí    |
| Lo que más me ha gustado                |                Integración con Git y VS Code             |         No lo hemos podido probar   |
| Lo que menos me ha gustado              |               Tiene límite de uso gratuito              |    Menos herramientas para desarrollar proyectos grandes        |
| ¿Para qué tipo de trabajo lo elegiría?  |                 Desarrollo de aplicaciones            |   Ciencia de datos, IA y análisis         |

---

## 2. Módulos y extensiones (CE 2.b)

| Extensión | ¿Para qué sirve? | ¿Qué cambió al instalarla? | ¿La mantengo? ¿Por qué? |
|-----------|------------------|----------------------------|-------------------------|
| Extension Pack for Java | Añade soporte completo para Java  |  Aparecieron los botones Run y Debug | Sí, porque facilita programar en Java  |
| Code Spell Checker      |  Corrige errores ortográficos |  Marcaba muchas palabras en español como incorrectas |No, porque resulta molesta al trabajar en español   |

¿Qué diferencia hay entre instalar una extensión **solo desde el panel** y añadirla **también a `devcontainer.json`**?

> Si la instalo solo desde el panel, puede quedar instalada únicamente en mi entorno actual. Si también la añado a devcontainer.json, queda indicada en la configuración del proyecto y se puede instalar automáticamente cuando otra persona abre o reconstruye el contenedor. Así es más fácil que todos tengamos un entorno parecido.

---

## 3. Personalización y automatización (CE 2.c)

- **Tema visual elegido** (paso 10) y por qué:Elegí un tema visual que me permite distinguir bien el código y leerlo cómodamente es el primero que te sale 
- **Ajuste del proyecto** (paso 10). ¿Qué archivo se ha creado y qué contiene?
Se creó .vscode/settings.json. Este archivo contiene ajustes del editor para el proyecto. Entre ellos está la opción de formatear el código automáticamente al guardar, para mantenerlo ordenado y con un estilo uniforme.

```
{
    "editor.formatOnSave": true
}
```

- **Atajo de teclado** (paso 11). ¿Qué acción, qué combinación y para qué te sirve?
Configuré el atajo Ctrl + Alt + R para ejecutar Codespaces: Rebuild Container. Sirve para reconstruir el entorno de desarrollo rápidamente sin tener que buscar la acción cada vez. En Mac, la combinación indicada en la práctica es Ctrl + Option + R.
- **Snippet** (paso 12). ¿Qué escribes y qué aparece?
Al escribir cabecera en un archivo Java y seleccionar el snippet, aparece una plantilla de código con la cabecera preparada y mi nombre. Esto evita escribir el mismo contenido repetidamente y ayuda a mantener un formato común.
- **Automatización al crear el entorno** (paso 14). ¿Qué hace `postCreateCommand` y qué archivos/carpetas han aparecido después de reconstruir?
La propiedad postCreateCommand ejecuta un comando automáticamente después de crear el contenedor. En mi configuración es:

"postCreateCommand": "npm install"

Este comando instala las dependencias definidas en package.json. Después aparecen o se actualizan node_modules/ y package-lock.json, que permiten disponer de las dependencias necesarias para el proyecto.
- **Tareas** (paso 13). ¿Cuántas tareas hay en `tasks.json` y qué hace cada una?
El archivo .vscode/tasks.json contiene las tareas automatizadas del proyecto. Se utilizan para ejecutar comandos de compilación desde VS Code. Para indicar el número exacto y describir cada tarea sin equivocarme, hay que revisar el contenido real de ese archivo.

¿Qué parte de toda esta configuración es **personal** (solo para ti) y qué parte es **del proyecto** (la recibe cualquiera que abra el repositorio)?

> La configuración personal incluye mis preferencias generales del editor, como el tema visual o los ajustes que solo guardo en mi perfil. La configuración del proyecto incluye archivos como .devcontainer/devcontainer.json, .vscode/settings.json, .vscode/tasks.json y los snippets guardados en el repositorio. Esta última la pueden compartir los demás al clonar el proyecto.

---

## 4. Ejecutables de diferentes lenguajes en el mismo entorno (CE 2.e)

Salida completa de la tarea **Build completo** (paso 15):

```
 *  Ejecutando tarea: mkdir -p build/java && javac -d build/java src/java/Factura.java && jar --create --file build/factura.jar --main-class Factura -C build/java . && java -jar build/factura.jar 

=== FACTURA generada con Java 21 ===
Dominio web anual              12.00 EUR
Alojamiento web                59.90 EUR
Logotipo corporativo          150.00 EUR
-----------------------------------------
Base imponible                221.90 EUR
IVA (21 %)                     46.60 EUR
TOTAL                         268.50 EUR
 *  Las tareas reutilizarán el terminal, presione cualquier tecla para cerrarlo. 

 *  Ejecutando tarea: npm run build && npm start 


> plantilla-entorno-daw@1.0.0 build
> tsc


> plantilla-entorno-daw@1.0.0 start
> node dist/factura.js

=== FACTURA generada con Node.js v24.22.1 ===
Dominio web anual              12.00 EUR
Alojamiento web                59.90 EUR
Logotipo corporativo          150.00 EUR
-----------------------------------------
Base imponible                221.90 EUR
IVA (21 %)                     46.60 EUR
TOTAL                         268.50 EUR
 *  Las tareas reutilizarán el terminal, presione cualquier tecla para cerrarlo. 

```

| Lenguaje | Archivo fuente | Herramienta que lo traduce | Archivo generado | Cómo se ejecuta |
|----------|----------------|----------------------------|------------------|-----------------|
| Java       | `src/java/Factura.java` |Compilador Java (javac)   | build/factura.jar  | Con la máquina virtual Java, usando java -jar build/factura.jabuild/factura.jarr si el JAR tiene configurado el punto de entrada.  |
| TypeScript | `src/ts/factura.ts`     | Compilador TypeScript (tsc)  |  dist/factura.js |  Con Node.js, usando node dist/factura.js. |

**Opcional:** ¿has podido ejecutar los mismos archivos desde JupyterLab (paso 19)? ¿Por qué funciona en los dos IDE sin instalar nada más?

> La idea es que ambos IDE utilizan el mismo entorno de desarrollo del contenedor. Por eso pueden acceder a las herramientas instaladas, como Java y Node.js, y a los archivos del proyecto. No es necesario instalar esas herramientas por separado en cada editor si ambos están conectados al mismo entorno.

---

## 5. Sistema de actualizaciones (CE 2.d)

| Elemento | ¿Quién lo actualiza? | Modo (automático / manual / ninguno) | Qué he configurado yo |
|----------|----------------------|--------------------------------------|-----------------------|
| El editor de Codespaces |  GitHub y Microsoft mantienen el servicio y el editor. |  Gestionado por el servicio. |  Utilizo Codespaces para desarrollar en la nube. |
| Las extensiones         | Sus respectivos desarrolladores y el sistema de extensiones.  | Depende de la política elegida.  |  He añadido Extension Pack for Java a la configuración y he quitado Code Spell Checker. |
| Java                    | La feature del contenedor instala la versión solicitada.  | Manual al cambiar la configuración y reconstruir.  | He fijado Java en la versión 21, una versión LTS.  |
| Node.js                 | La feature de Node.js instala una versión estable compatible con su configuración.  |  Puede cambiar al reconstruir si no se fija una versión. | He dejado la configuración de Node.js como {}.  |
| Dependencias npm (lodash, typescript…) | Los mantenedores publican las versiones y npm las instala.  | Manual, mediante cambios en las dependencias y npm install.  | He revisado las versiones disponibles y las vulnerabilidades con npm.  |

Versión de Java **antes** (paso 5) y **después** (paso 18):

```
Antes: Java 27
Después: Java 21
```

Resultado de `npm outdated` (paso 17):

```
Package         Current    Wanted   Latest  Location                    Depended by
@types/lodash  4.14.202  4.14.202  4.17.27  node_modules/@types/lodash  entorno-daw-david-belhadi
@types/node    20.11.30  20.11.30   26.6.5  node_modules/@types/node    entorno-daw-david-belhadi
lodash          4.17.20   4.17.20   4.18.1  node_modules/lodash         entorno-daw-david-belhadi
typescript        5.4.5     5.4.5    7.0.2  node_modules/typescript     entorno-daw-david-belhadi
```

Resultado de `npm audit` **antes** de actualizar lodash (solo el resumen final):

La auditoría detectó una vulnerabilidad de severidad alta relacionada con lodash. El informe indicó que la versión instalada estaba afectada por varios avisos de seguridad y que había una actualización disponible.


```
# npm audit report

lodash  <=4.17.23
Severity: high
Command Injection in lodash - https://github.com/advisories/GHSA-35jh-r3h4-6jhm
Regular Expression Denial of Service (ReDoS) in lodash - https://github.com/advisories/GHSA-29mw-wpgm-hmr9
lodash vulnerable to Code Injection via `_.template` imports key names - https://github.com/advisories/GHSA-r5fr-rjxr-66jc
lodash vulnerable to Prototype Pollution via array path bypass in `_.unset` and `_.omit` - https://github.com/advisories/GHSA-f23m-r3pf-42rh
Lodash has Prototype Pollution Vulnerability in `_.unset` and `_.omit` functions - https://github.com/advisories/GHSA-xxjr-mmjv-4gpg
fix available via `npm audit fix --force`
Will install lodash@4.18.1, which is outside the stated dependency range
node_modules/lodash

1 high severity vulnerability

To address all issues, run:
  npm audit fix --force
```

Resultado de `npm audit` **después**:

```
found 0 vulnerabilities
```

**Mi política de actualizaciones**: si este entorno lo usara un equipo de 5 personas durante todo el curso, ¿qué dejarías en automático y qué fijarías a mano? Justifícalo.

> Dejaría que las herramientas y dependencias se instalaran automáticamente al crear el entorno, pero fijaría las versiones importantes, como Java, para que todos los integrantes utilizaran la misma versión. Las actualizaciones de dependencias las revisaría manualmente y ejecutaría pruebas después de instalarlas. También revisaría las vulnerabilidades con npm audit. Así evitaría que una actualización inesperada rompiera el proyecto de todo el equipo.

---

## 6. Incidencias

Anota cualquier problema que hayas tenido y cómo lo resolviste (también si usaste un fragmento completo).

> Durante la práctica, al principio los comandos java -version y node -v indicaban que las herramientas no estaban disponibles. Lo resolví configurando las features correspondientes en devcontainer.json y reconstruyendo el contenedor.

También tuve que configurar Python con JupyterLab y añadir la extensión de Java a la configuración del contenedor para que el entorno se preparara automáticamente. Finalmente, fijé Java en la versión 21 para evitar que cambiara de versión al reconstruir.

## 7. Reflexión final

¿Qué ventaja tiene describir el entorno «como código» frente a instalar cada programa a mano en tu ordenador? Piensa en un equipo con Mac y Windows.

> Describir el entorno como código permite que todos los integrantes de un equipo utilicen una configuración común sin tener que instalar cada programa manualmente. Esto es especialmente útil cuando unas personas usan Mac y otras Windows, porque el contenedor proporciona un entorno de desarrollo compartido. Así se reducen los errores de configuración, se facilita la incorporación de nuevos compañeros y es más sencillo reproducir el entorno si hay que crearlo de nuevo.

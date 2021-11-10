# SoSCe

**TABLA DE CONTENIDO**

## 1. Nombre del Producto

SosCe es un página web que registra denuncias por violencia sufrida o presenciada.

## 2. Definición del Producto 
- En SoSCe, las denuncias puede ser de forma anónima o con registro de datos. También se puede pedir socorro o auxilio.
- Si la denuncia es anónima entoncés cifrará la descripción del caso en sí( descripción de la denuncia), en cambio si es una denuncia con registro de datos; cifrara y descifrará los datos sensibles como es el nombre, apellidos, dni, correo electrónico, teléfono, dirección y el caso.

	[link] [Definición del producto e Historias de usuario](http://devsoftwaresys.atlassian.net/wiki/spaces/D/pages/5963801/DOCUMENTACI+N+DEL+PROYECTO "Definición del producto e Historias de usuario")

### 2.1 ¿Quiénes son los principales usuarios de producto?

Las personas (niños, adolescentes, jóvenes, adultos y adultos mayores) que realizan la denuncia por violencia.

### 2.2 ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

+ Registrar la denuncia para cualquier tipo de violencia.
+ Proteger su identidad, datos y descripción de la denuncia o caso.
+ Pedir ayuda o socorro.

### 2.3 ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

+ Da opciones(anónima, con datos, pedida SOS) para poder registrar su denuncia.
+ Protege los datos sensibles mediante la encriptación y desencriptación.
+ Protegiendo al denunciante o víctima que presencia o sufre la violencia.

## 3. Organización del Proyecto

Para organizar el proyecto se aplico la metodología ágil SCRUM, la cual se realizo en JIRA. Se dividió en epicas y versiones. Se creo el product baklog, las historias de usuario, las subtareas de las HU y tareas. Seguidamente, se crearón los sprints.

[link]  [SCRUM con JIRA](https://devsoftwaresys.atlassian.net/jira/software/c/projects/DV/boards/3/backlog?issueLimit=100 "SCRUM con JIRA")

## 4. Experiencia de Usuario

### 4.1 Prototipo

El prototipo se realizó en Figma.

#### 4.1.1 Prototipo inicial

[link] [Prototipo en figma](https://www.figma.com/file/N7Jaq8r13uH1bh1IDPZ601/AlgoritmoCesar?node-id=46%3A27 "Prototipo en figma")

![prototipo1](https://user-images.githubusercontent.com/69210648/141059462-1b00d71c-4ec5-4055-9a5b-cfcf61b82d75.png)


### 4.2 Diseño final

## 5. Objetivos de Aprendizaje

+ ### HTML
	- [x] Uso de HTML semántico

+ ### CSS
	- [x] Uso de selectores de CSS
	- [x] Modelo de caja (box model): borde, margen, padding

+ ### Web APIs
	- [x] Uso de selectores del DOM
	- [x] Manejo de eventos del DOM
	- [ ] Manipulación dinámica del DOM

+ ### JavaScript
	- [x]  Tipos de datos primitivos
	- [x] Manipulación de Strings
	- [x] Variables (declaración, asignación, ámbito)
	- [x] Uso de condicionales (if-else)
	- [x] Uso de bucles/ciclos (for)
	- [x] Funciones (params, args, return)
	- [x] Pruebas unitarias (unit tests)
	- [x] Módulos de ECMAScript (import & export)
	- [x] Uso de linter (ESLINT)
	- [x]  Uso de identificadores descriptivos (Nomenclatura y Semántica)

+ ### Control de Versiones (Git y GitHub)
	- [x] Git: Instalación y configuración
	- [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
	- [ ] GitHub: Creación de cuenta y repos, configuración de llaves SSH
	- [x] GitHub: Despliegue con GitHub Pages

+ ### UX (User eXperience)
	- [x] Diseñar la aplicación pensando en y entendiendo al usuario
	- [x] Crear prototipos para obtener feedback e iterar
	- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 6. Características del Proyecto

### 6.1 Características

+ Cifra y descifra letras en mayúsculas o minúsculas
+ Cifra y descifra números.
+ Cifra con offset positivo y negativo.
+ Con caracteres especiales y espacios retorna el mismo valor.

### 6.2 Funcionalidad

+ Al iniciar la página se puede elegir como se desea realizar la denuncia(anónima o con registro de datos).
+ Cuando damos click en Con datos, se muestra una interfaz donde existe un boton de instrucciones que se despliega al dar click.
+ Sección que permite escribir el offset o desplazamiento a usar en el cifrado/descifrado denominado Desplazamiento.
+ Un formulario donde se registrarán los datos sensibles como el nombre, apellidos paterno y materno, dni, telefono, correo electrónico y dirección.
+ Al click en los botones para cifrar y descifrar se mostrara el resultado en la mismo formulario.
## 7. Criterios de Aceptación Mínimos del Proyecto

+ Usa este alfabeto simple (solamente mayúsculas y sin ñ),  basado en el cifrado César, en el cual se sustituye una letra por otra que se encuentre cierto número de posiciones adelante o atrás, dentro del abecedario español sin considerar la ñ.

+ Cifra y descifra mayúsculas ingresando previamente el número de desplamiento.


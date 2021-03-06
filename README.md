# SOSCE

**TABLA DE CONTENIDO**

## 1. Nombre del Producto

SosCe es un página web que registra denuncias por violencia sufrida o presenciada.

## 2. Definición del Producto 
- En sosce, las denuncias puede ser de forma anónima o con registro de datos. También se puede pedir socorro o auxilio.
- Si la denuncia es anónima entoncés cifrará la descripción del caso en sí( descripción de la denuncia), en cambio si es una denuncia con registro de datos; cifrara y descifrará los datos sensibles como es el nombre, apellidos, dni, correo electrónico, teléfono, dirección y el caso.

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

[link] [Definición del producto e Historias de usuario](http://devsoftwaresys.atlassian.net/wiki/spaces/D/pages/5963801/DOCUMENTACI+N+DEL+PROYECTO "Definición del producto e Historias de usuario")

## 3. Organización del Proyecto

Para organizar el proyecto se aplico la metodología ágil SCRUM, la cual se realizo en JIRA. Se dividió en epicas y versiones. Se creo el product baklog, las historias de usuario, las subtareas de las HU y tareas. Seguidamente, se crearón los sprints.

[link]  [SCRUM con JIRA](https://devsoftwaresys.atlassian.net/jira/software/c/projects/DV/boards/3/backlog?issueLimit=100 "SCRUM con JIRA")

## 4. Experiencia de Usuario

### 4.1 Prototipo

El prototipo se realizó en Figma.

#### 4.1.1 Prototipo inicial

[link] [Prototipo en figma](https://www.figma.com/file/N7Jaq8r13uH1bh1IDPZ601/AlgoritmoCesar?node-id=46%3A27 "Prototipo en figma")

![prototipo1](https://user-images.githubusercontent.com/69210648/141059462-1b00d71c-4ec5-4055-9a5b-cfcf61b82d75.png)

![prototipo2](https://user-images.githubusercontent.com/69210648/141059725-88aa941a-b072-49f1-9664-ca4ab1acc33f.png)

![prototipo3](https://user-images.githubusercontent.com/69210648/141059745-79bc9163-d724-498e-b8a3-62491a8cd27b.png)

![prototipo4](https://user-images.githubusercontent.com/69210648/141059762-110c44e7-fbd2-4644-951c-847144f71343.png)

### 4.2 Diseño final

[link] [Denuncia con datos](https://kalyzca.github.io/LIM016-cipher/ "Denuncia con datos")

![interfaz](https://user-images.githubusercontent.com/69210648/141060897-7cdfb7cd-155b-46ad-9c31-fd977af1497a.png)

![cifrado](https://user-images.githubusercontent.com/69210648/141060924-4670638b-57fc-4000-b70a-f21d314f08e9.png)

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
  ![interfaz](https://user-images.githubusercontent.com/69210648/141061405-6a41dcab-7410-4fa9-b2b7-77f375de91ec.png)

+ Cuando damos click en Con datos, se muestra una interfaz donde existe un boton de instrucciones que se despliega al dar click.
+ Sección que permite escribir el offset o desplazamiento a usar en el cifrado/descifrado denominado Desplazamiento.
+ Un formulario donde se registrarán los datos sensibles como el nombre, apellidos paterno y materno, dni, telefono, correo electrónico y dirección.

![registro de datos](https://user-images.githubusercontent.com/69210648/141061489-34bb3979-0bf2-409f-8502-3f7715562799.png)

+ Al click en los botones para cifrar y descifrar se mostrara el resultado en la mismo formulario.

![cifrando](https://user-images.githubusercontent.com/69210648/141061535-75a92cde-0b11-4267-94db-5b9f54f34190.png)

## 7. Criterios de Aceptación Mínimos del Proyecto

+ Usa este alfabeto simple (solamente mayúsculas y sin ñ),  basado en el cifrado César, en el cual se sustituye una letra por otra que se encuentre cierto número de posiciones adelante o atrás, dentro del abecedario español sin considerar la ñ.

+ Cifra y descifra mayúsculas ingresando previamente el número de desplamiento.


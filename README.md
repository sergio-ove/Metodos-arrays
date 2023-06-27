# Metodos-arrays


### Prueba a realizar:
![prueba](/src/screens/1-home.jpg)

### Links de interés:
- [Visualizar mi curriculum.](./client//public/Curriculum-lydia-vega.FullStack.pdf)
- [Perfil de LinkedIn.](https://www.linkedin.com/in/lydia-vega/)
- [Perfil de GitHub.](https://github.com/lyvegama)
- [Repositorio con el proyecto de la prueba ténica.](https://github.com/lyvegama/test-Memorandum)

### Inicialización del proyecto:
Para inicializar el proyecto abrir la terminal y escribir los siguientes comandos:
Con éste se clonará de GitHub mi repositorio de la prueba.
```
git clone https://github.com/lyvegama/test-Memorandum.git
```
Nos introduciremos en dicha carpeta:
```
cd test-Memorandum 
```
Instalaremos las extensiones y librerías contenidas en él.
```
npm install 
```
Ahora podremos inicializarlo con:
```
npm start 
```
Se abrirá el navegador en [http://localhost:3000](http://localhost:3000) y podrá visualizarse el Inicio.

### Tecnologías usadas primera entrega:
* react: 18.2.0
* react-dom: 18.2.0
* react-router-dom: 6.10.0 
* react-scripts: 5.0.1
* web-vitals: 2.1.4
* bootstrap: 5.3.0-alpha3
* mdb-ui-kit: 6.2.0

### Tecnologías usadas segunda entrega:
* react: 18.2.0
* react-dom: 18.2.0
* react-router-dom: 6.10.0 
* react-scripts: 5.0.1
* web-vitals: 2.1.4
* autoprefixer: 10.4.14
* postcss: 8.4.23
* tailwindcss: 3.3.2

*En cuanto a diseño decidí cambiar **bootstrap** por **tailwindcss** por su mayor capacidad de personalización.*

## Detalles:
3 páginas con React:
- [x] Una página de "Inicio"
- [x] Una página de "Series"
- [x] Una página "Películas"


### Lista de características:

- [x] Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
- [ ] Mostrar sólo si contienen el atributo releaseYear >= 2010
- [x] Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico
- [x] Para la página de "Series" usar resultados con programType igual a series.
- [x] Para la página de "Películas" usar resultados con programType igual a movie.

- [ ] Al posicionar el mouse sobre cada resultado la caja debe reducir su opacidad y mostrar borde blanco.
- [ ] Al hacer click sobre el titulo deberá abrirse un popup mostrando la información completa.

### Requisitos de Stack
Para el desarrollo de la aplicación deberá utilizar:

- [x] React / React Hooks
- [ ] Redux
- [x] Librería de estilos (styled-components, CSS modules, o similar)
- [x] Mobile friendly
- [ ] Unit tests (jest, react-testing-library, o similar)

*No he llegado por tiempo a poder hacer pruebas unitarias, he priorizado otras funcionalidades.*

### Uso de diferentes métodos de Array:

| Método    | Descripción   |         
|---------------------------|-------|
| datos.map |   Para crear un nuevo array con los resultados de la llamada |         
| datos.filter      |   Para crear un nuevo array con los elementos que cumplan la condición dada    |  
| ordenado.sort | Para ordenar los elementos del array, devolviéndolo ordenado

# Metodos-arrays

Prueba técnica que se basa en el manejo de React y React-router-dom.
Manejo de métodos de arrays y posterior visualización.

### Inicialización del proyecto:
Para inicializar el proyecto abrir la terminal y escribir los siguientes comandos:
Con éste se clonará de GitHub mi repositorio de la prueba.
```
git clone https://github.com/sergio-ove/Metodos-arrays.git
```
Nos introduciremos en dicha carpeta:
```
cd client
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

## Detalles:
3 páginas con React:
- [x] Una página de "Inicio"
- [x] Una página de "Series"
- [x] Una página "Películas"


### Lista de características:

- [x] Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
- [x]  Mostrar sólo si contienen el atributo releaseYear >= 2010
- [x] Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico
- [x] Para la página de "Series" usar resultados con programType igual a series.
- [x] Para la página de "Películas" usar resultados con programType igual a movie.
- [x]  Al hacer click sobre el titulo deberá abrirse un popup mostrando la información completa.


### Uso de diferentes métodos de Array:

| Método    | Descripción   |         
|---------------------------|-------|
| datos.map |   Para crear un nuevo array con los resultados de la llamada |         
| datos.filter      |   Para crear un nuevo array con los elementos que cumplan la condición dada    |  
| ordenado.sort | Para ordenar los elementos del array, devolviéndolo ordenado

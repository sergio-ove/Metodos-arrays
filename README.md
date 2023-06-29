# Metodos-arrays (Prueba técnica React)

Prueba técnica que se basa en el manejo de React y React-router-dom.
Manejo de métodos de arrays y posterior visualización mediante el uso de Hooks.

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

### Tecnologías usadas:
* react: 18.2.0
* react-dom: 18.2.0
* react-router-dom: 6.10.0 
* react-scripts: 5.0.1
* web-vitals: 2.1.4

## Detalles:
11 páginas con React:
- [x] Una página de "Home" que contiene el acceso a "Series" y a "Movies"
- [x] Una carpeta de "Series",con un componente central llamado "FuncionesSeries" que llama a sus 4 funcionalidades/componentes.
- [x] Una carpeta de "Movies",con un componente central llamado "FuncionesMovies" que llama a sus 4 funcionalidades/componentes.



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
| map() |   Con él recorremos el array correspondiente de cada componente para su visualización |         
| filter()      |   Creamos un nuevo array con los objetos que necesitemos en cada componente.
En el caso de mi componente "SeriesPorAntiguedad" creamos un nuevo array con los objetos que en su propiedad "releaseYear" sean iguales o mayores al dato "2010".
De esta manera obtenemos las series que se hayan estrenado a partir del año 2010.   |  
| sort() | Ordenamos los objetos del array.
En el caso del componente "OrdenarSeries" los ordenaremos por el atributo "title" de manera ascendente con órden alfanumérico.
| find() | Nos devuelve en nuestro caso la primera coincidencia que encuentre por "title" entre el titulo "clickado" por el usuario y el objeto correspondiente en el array de objetos.Una vez encuentre la coincidencia,guardamos el objeto con todas las propiedades en nuestro  
const [infoPeli, setInfoPeli] = useState("") y lo renderizamos en la funcionalidad del popUp con toda su información.

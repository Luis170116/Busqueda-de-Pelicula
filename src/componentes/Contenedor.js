import React,{Component} from "react";
import ListaPelicula from "./ListaPelicula"

const arregloPeliculas=[
    {id:1, nombre:"El cuento de las comadrejas",Genero:"Comedia",precio:7.50 },
    {id:2, nombre:"Spider-man: Lejos de casa ",Genero:"Acción",precio:7.50 },
    {id:3, nombre:"Aladdín",Genero:"Familiar",precio:7.50 },
    {id:4, nombre:"Amante Doble",Genero:"Drama",precio:7.50},
    {id:5, nombre:"Annabelle 3 Viene a casa",Genero:"Terror",precio:8.00},
    {id:6, nombre:"Avengers: End Game",Genero:"Acción",precio:8.00},
    {id:7, nombre:"Deliciosa Fruta Seca",Genero:"Drama",precio:19},
    {id:8, nombre:"Hombres de negro: Internacional",Genero:"Ciencia Ficción",precio:8.00},
    {id:9, nombre:"Toy Story 4",Genero:"Animación",precio:7.50},
    {id:10, nombre:"La vida secreta de tus mascotas 2",Genero:"Animación",precio:7.50},
    {id:11, nombre:"Rocketman",Genero:"Musical",precio:7.50},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            ListaPeliculas:arregloPeliculas,
            Listacarrito:[],
            Total:0
        }
    }
    escribiendo=(evento)=>{
       // console.log("escribiendo",evento.target.value)
        const texto=evento.target.value;
        this.filtrar(texto)
    }

    filtrar=(texto)=>{
        const listadoFiltrado=[];
       for(let i=0;i<arregloPeliculas.length;i++){
           const Peliculas=arregloPeliculas[i];
           if(Peliculas.nombre.toLowerCase().startsWith(texto.toLowerCase())){
               listadoFiltrado.push(Peliculas);
           }
       }
       this.setState({ListaPeliculas:listadoFiltrado})
    }


    AgregarAlCarrito= (Peliculas) =>{
        const {Listacarrito} = this.state
        Listacarrito.push(Peliculas)
        let precioTotal=0;
        Listacarrito.forEach((item)=>{
              precioTotal+=item.precio;
        })
        this.setState({Listacarrito,Total:precioTotal})
    }
    render(){

        const{ListaPeliculas,Listacarrito,Total}=this.state
        return(
            <div>
            Buscar Peliculas
            <div style={{display:"flex",backgroundColor:"red"}}>
              <div style={{flex:1,backgroundColor:"yellow"}}>
                
              <input  onChange={this.escribiendo}/>
              <ListaPelicula AgregarAlCarrito={this.AgregarAlCarrito} Peliculas={ListaPeliculas} />
                </div>

                    <div style={{flex:1,backgroundColor:"red"}}>
                     Carrito de Compras
                     <div>Total:{Total}</div>

                     <ListaPelicula Peliculas={Listacarrito}/>

                  </div> 
                </div>
                  </div> 


                 
        
        

        )
    }
}

export default Contenedor
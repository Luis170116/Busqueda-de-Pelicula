import React, {Component} from "react";

class ListaPelicula extends Component{
   clickPelicula =(item) =>{
       const {AgregarAlCarrito} = this.props
 console.log("Haciendo click en la Pelicula", item)
     if(typeof AgregarAlCarrito === "function"){
     AgregarAlCarrito(item);
    }
   }
   
    render(){
        const{Peliculas}=this.props
        return(
            <div>
 <div>
 {Peliculas.map((item, index)=>{

    return(
 <div onClick={()=>{this.clickPelicula(item)}} key={index}>
  {item.nombre}/    Genero: {item.Genero} / Precio=S/{item.precio} 
 </div>

  )
  })}
  </div>
</div>
 )
}
   
}

export default ListaPelicula

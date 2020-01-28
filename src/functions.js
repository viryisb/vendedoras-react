const helper = {
    precioMaquina: function(componentes, listadoPrecios){
        let total = 0;
        componentes.forEach(c => total += obtenerPrecioDelComponente( c, listadoPrecios ));
    
        return total;
    }
}
function obtenerPrecioDelComponente (nombreComponente, listadoPrecios) {
   
    const componente = listadoPrecios.find(function (p) {
      return p.componente === nombreComponente;
    })
    return componente.precio;
  }

export default helper;
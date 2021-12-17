class torta {
    constructor(nombre,base,cortes,relleno,decoracion,precio)
    {
        this.nombre = nombre,
        this.base = base,
        this.cortes = cortes,
        this.relleno = relleno,
        this.decoracion = decoracion,
        this.precio = precio
    }
    getIva()
    {
        return this.precio*0.21
    }
}
const balcarce = new torta(
    "Balcarce",
    "Pionono",
    "1",
    "dulce de leche, crema chantilly y merengue",
    "crema y merengues",
    1000
)
const selvaNegra = new torta(
    "Selva Negra",
    "bizcochuelo de chocolate",
    "2",
    "crema chantilly y mermelada de cerezas",
    "crema, cerezas y ramas de chocolate",
    1500
)
let opcionTorta = "Seleccione la torta deseada\n";
opcionTorta += "1. "+balcarce.nombre+"\n"
opcionTorta += "2. "+selvaNegra.nombre+"\n"
 
    let opcion = 0
    while (opcion !==1 && opcion !==2) {
        opcion = parseInt(prompt(opcionTorta));
        switch (opcion)
        {
            case 1:
                {
                    alert("Usted eligió la torta: "+balcarce.nombre+"\nLa misma consta de una base de "+balcarce.base+" con "+balcarce.cortes+" cortes, y está relleno de "
                    +balcarce.relleno+". Está decorada con "+balcarce.decoracion)
                    alert("El precio de la misma es $"+parseInt(balcarce.precio+balcarce.getIva()))
                    break;
                }
            case 2:
                {
                    alert("Usted eligió la torta: "+selvaNegra.nombre+"\nLa misma consta de una base de "+selvaNegra.base+" con "+selvaNegra.cortes+" corte, y está relleno de "
                    +selvaNegra.relleno+". Está decorada con "+selvaNegra.decoracion)
                    alert("El precio de la misma es $"+parseInt(selvaNegra.precio+selvaNegra.getIva()))
                    break;
                }
            default:
                {
                    alert("Por favor, elija una opción válida");
                    break;
                }
        
        }  
    }
import { Injectable } from '@angular/core';
import { Categoria } from '../clase/categoria';
import { Producto } from '../clase/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoAEditar!: Producto;

  constructor() { }

  categorias:Categoria[] = [{
    nombre: "Bicicletas", productos: [{
      descripcion: " Cuadro: Acero alivianado" +
        " Cambios index. 21 velocidades.Cadena 1/2 * 3/32 Index. Shifters Tipo RapidFire. LLantas de aluminio. Rayos, llantas y mazas color negro. Juego de direcciónes NECO H831."
        + " Puños: de goma", nombre: "Bicicleta Futura R26 TECHNO", path: "https://www.cetrogar.com.ar/media/catalog/product/r/o/ro2086.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
    },
    {
      descripcion: " Cuadro: Acero alivianado" +
        " Sistema de cambios: SAIGUAN de 18 velocidades" +
        " Pata de cambio SAIGUAN" +
        " Piñón: 6 velocidades" +
        " Plato/Palanca: SAIGUAN 42-34-24" +
        " Frenos: Balancin trasero y delantero" +
        " Caja de dirección integrada" +
        " Caño de asiento: con collar de cierre" +
        " Asiento: MTB" +
        " Puños: de goma", nombre: "Bicicleta", path: "https://http2.mlstatic.com/D_NQ_NP_662275-MLA45336241212_032021-O.webp"
    },
    {
      nombre: "Bicicleta Futura Techno MTB Rodado 26 Hombre con Suspensión Naranja", descripcion: "La bicicleta Mountain Bike Futura Techno Rodado 26 viene con suspensión delantera y juego de dirección NECO. Su cuadro Futura Oversize es de triple triángulo, los frenos son V-Brake y las manijas de freno son de aluminio. También posee cadena taya, pedales Xerama con bolillas, mandos tipo grip shift, caja central semisellada y llantas de aluminio de 430 gs. Además el cambio, descarrilador, plato, palanca y piñon son S-In", path: "https://images.fravega.com/f500/1c79f212fca5fc6a89a7a75a7a34578c.jpg"
    },
    { nombre: "Bicicleta Futura Techno MTB Rodado 26 Hombre con Suspensión Naranja", descripcion: "Cuadro MTB aluminio SLP 25 PRO   Calco al agua bajo barniz Juego de dirección integrado  Transmisión 21v Cambio shimano tourney tz31 Descarrilador shimano tourney tz500 Manijas integradas slp Palancas triple aluminio slp Piñón 7 velocidades Caja pedalera sellada con bolillero  Horquilla suspensión SLP Frenos a disco SLP mecánico  Ruedas MTB SLP 25 PRO doble pared Sten, forma y portasilla MTB aluminio SLP Pedal MTB de aluminio Pie aluminio regulable central semisellada y llantas de aluminio de 430 gs. Además el cambio, descarrilador, plato, palanca y piñon son ", path: "https://images.fravega.com/f500/52c12b08ad968554ed1cc55ef6c1b330.jpg" }
      , {
      descripcion: " Cuadro: Acero alivianado" +
        " Sistema de cambios: SAIGUAN de 18 velocidades" +
        " Pata de cambio SAIGUAN" +
        " Piñón: 6 velocidades" +
        " Plato/Palanca: SAIGUAN 42-34-24" +
        " Frenos: Balancin trasero y delantero" +
        " Caja de dirección integrada" +
        " Caño de asiento: con collar de cierre" +
        " Asiento: MTB" +
        " Puños: de goma", nombre: "Bicicleta", path: "https://http2.mlstatic.com/D_NQ_NP_662275-MLA45336241212_032021-O.webp"
    }
      , {
      descripcion: " Cuadro: Acero alivianado" +
        " Cambios index. 21 velocidades.Cadena 1/2 * 3/32 Index. Shifters Tipo RapidFire. LLantas de aluminio. Rayos, llantas y mazas color negro. Juego de direcciónes NECO H831."
        + " Puños: de goma", nombre: "Bicicleta Futura R26 TECHNO", path: "https://www.cetrogar.com.ar/media/catalog/product/r/o/ro2086.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
    },{
      descripcion: " Cuadro: Acero alivianado" +
        " Cambios index. 21 velocidades.Cadena 1/2 * 3/32 Index. Shifters Tipo RapidFire. LLantas de aluminio. Rayos, llantas y mazas color negro. Juego de direcciónes NECO H831."
        + " Puños: de goma", nombre: "Bicicleta Futura R26 TECHNO", path: "https://www.cetrogar.com.ar/media/catalog/product/r/o/ro2086.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
    },
    {
      descripcion: " Cuadro: Acero alivianado" +
        " Sistema de cambios: SAIGUAN de 18 velocidades" +
        " Pata de cambio SAIGUAN" +
        " Piñón: 6 velocidades" +
        " Plato/Palanca: SAIGUAN 42-34-24" +
        " Frenos: Balancin trasero y delantero" +
        " Caja de dirección integrada" +
        " Caño de asiento: con collar de cierre" +
        " Asiento: MTB" +
        " Puños: de goma", nombre: "Bicicleta", path: "https://http2.mlstatic.com/D_NQ_NP_662275-MLA45336241212_032021-O.webp"
    },
    {
       nombre: "Bicicleta Futura Techno MTB Rodado 26 Hombre con Suspensión Naranja", descripcion: "La bicicleta Mountain Bike Futura Techno Rodado 26 viene con suspensión delantera y juego de dirección NECO. Su cuadro Futura Oversize es de triple triángulo, los frenos son V-Brake y las manijas de freno son de aluminio. También posee cadena taya, pedales Xerama con bolillas, mandos tipo grip shift, caja central semisellada y llantas de aluminio de 430 gs. Además el cambio, descarrilador, plato, palanca y piñon son S-In", path: "https://images.fravega.com/f500/1c79f212fca5fc6a89a7a75a7a34578c.jpg" 
    },
      { nombre: "Bicicleta Futura Techno MTB Rodado 26 Hombre con Suspensión Naranja", descripcion: "Cuadro MTB aluminio SLP 25 PRO   Calco al agua bajo barniz Juego de dirección integrado  Transmisión 21v Cambio shimano tourney tz31 Descarrilador shimano tourney tz500 Manijas integradas slp Palancas triple aluminio slp Piñón 7 velocidades Caja pedalera sellada con bolillero  Horquilla suspensión SLP Frenos a disco SLP mecánico  Ruedas MTB SLP 25 PRO doble pared Sten, forma y portasilla MTB aluminio SLP Pedal MTB de aluminio Pie aluminio regulable central semisellada y llantas de aluminio de 430 gs. Además el cambio, descarrilador, plato, palanca y piñon son ", path: "https://images.fravega.com/f500/52c12b08ad968554ed1cc55ef6c1b330.jpg" }
        , {
          descripcion: " Cuadro: Acero alivianado" +
            " Sistema de cambios: SAIGUAN de 18 velocidades" +
            " Pata de cambio SAIGUAN" +
            " Piñón: 6 velocidades" +
            " Plato/Palanca: SAIGUAN 42-34-24" +
            " Frenos: Balancin trasero y delantero" +
            " Caja de dirección integrada" +
            " Caño de asiento: con collar de cierre" +
            " Asiento: MTB" +
            " Puños: de goma", nombre: "Bicicleta", path: "https://http2.mlstatic.com/D_NQ_NP_662275-MLA45336241212_032021-O.webp"
      }
        , {
          descripcion: " Cuadro: Acero alivianado" +
            " Cambios index. 21 velocidades.Cadena 1/2 * 3/32 Index. Shifters Tipo RapidFire. LLantas de aluminio. Rayos, llantas y mazas color negro. Juego de direcciónes NECO H831."
            + " Puños: de goma", nombre: "Bicicleta Futura R26 TECHNO", path: "https://www.cetrogar.com.ar/media/catalog/product/r/o/ro2086.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
      }
    ]
  }, { productos: [], nombre: 'Otros' }];
}

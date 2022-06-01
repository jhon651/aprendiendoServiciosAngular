import { Component } from '@angular/core';
import { ProductosService } from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';
  productos: any ;

  constructor(private productosService : ProductosService){
    console.log(JSON.stringify(productosService.productos))
    this.productos = productosService.productos.rows;
   
  }
  
  

}

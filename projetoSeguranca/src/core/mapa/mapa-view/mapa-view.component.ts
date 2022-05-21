import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/core/cadastro/cadastro.service';

@Component({
  selector: 'app-mapa-view',
  templateUrl: './mapa-view.component.html',
  styleUrls: ['./mapa-view.component.scss']
})
export class MapaViewComponent implements OnInit {

   // google maps zoom level
   zoom: number = 8;
   // // initial center position for the map
   lat: number = -26.7723817;
   lng: number = -48.6672466;

   markers: any[] = [];
   infoWindowOpened: any = null
   previous_info_window: any = null

  constructor(
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.cadastroService.listar().subscribe((res)=>{
      console.log('Resultado', res);
      this.markers = [];
      console.log('array marker', this.markers);

      //Adiciona a localização no Mapa
      res.forEach((item: { nome: any; lat: number; lng: number; corHexa: { toString: () => any; }; }) => {
        //Atribui valores a Array
        var dado: any = {

          cliente: item.nome,

          lat: item.lat,
          lng: item.lng,
          label: '',
          draggable: false,
          icon: { 'path': 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z', 'fillColor': item.corHexa.toString(), 'fillOpacity': 1, 'scale': 2 }
        }
        this.markers.push(dado);
      });
      console.log('array marker 1', this.markers);
  });
  }


   //##########################################################################################
  //#################################    GOOGLE MAPS       ###################################
  //##########################################################################################

  clickedMarker(infoWindow: any) {
    this.infoWindowOpened = infoWindow

    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.previous_info_window.close()
    }
  }

  // mapClicked(_$event: google.maps.InfoWindowHandlerMap): void {

  //   if (this.previous_info_window != null) {
  //     this.previous_info_window.close()
  //   }

  //   // $event.close();
  //   // console.log('evento',$event);

  //   //   if (this.infoWindow) {
  //   //     this.infoWindow.close();
  //   //  }
  //   // this.markers.push({
  //   //   lat: $event.latLng.lat(),
  //   //   lng: $event.latLng.lng(),
  //   //   draggable: true,
  //   //   icon: ""
  //   // });
  // }

  markerDragEnd(m: marker, _$event: MouseEvent) {
    // console.log('dragEnd', m, $event);
  }

  fechaWindow() {
    this.infoWindowOpened.close();
  }

}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: any;
}

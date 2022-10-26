import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { subscribeOn } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DatosService {

    public equipo: any[] = [];

    constructor(private http: HttpClient) {

        console.log('soy el servicio de datos');
        this.cargarEquipo();
    }

    private cargarEquipo() {
        this.http.get('https://angular-84edc-default-rtdb.firebaseio.com/equipo.json')
            .subscribe((res: any) => {
                this.equipo = res;
                console.log(res);
            })
    }


}
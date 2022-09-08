import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ImagenService } from '../../shared/services/imagen.service';

@Component({
    selector: 'app-detalle-tamizaje',
    templateUrl: './detalle-tamizaje.component.html',
    styleUrls: ['./detalle-tamizaje.component.scss'],
})
export class DetalleTamizajeComponent {

    public infoPaciente: any = [];
    public nombreCompleto: string = '';
    public urlImagen: string = '';
    public imgFromFtp: any;
    public estadoConfiguracionVph: string | null = '';
    public usuario: any;

    constructor(
        private imagen: ImagenService,
        private usuarioSvc: UsuarioService,
        private dialogRef: MatDialogRef<DetalleTamizajeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {

        // Obtener los datos del usuario logueado
        this.usuarioSvc.getUsuarioLogueado().subscribe((usuario) => {
            this.usuario = usuario;
        });

        this.verificarConfiguracionVphEnLocalStorage();

        this.desplegarImagen();

    }

    private verificarConfiguracionVphEnLocalStorage() {

        const configuracionVph = JSON.parse(localStorage.getItem('configuracionVph')!);
        this.estadoConfiguracionVph = configuracionVph.estado;

    }

    private desplegarImagen() {
        try {
            this.imagen
                .getImagenByIdTamizaje(this.data.Tamizaje.tam_id)
                .subscribe((imagen) => {
                    console.log('Imagen', imagen);

                    if (imagen.objetoRespuesta[0].ima_ruta !== undefined) {
                        this.urlImagen = imagen.objetoRespuesta[0].ima_ruta;
                        this.obtenerImgFtp(this.urlImagen);
                    } else {
                        this.urlImagen =
                            'https://images.unsplash.com/photo-1583106853354-9d88c18d46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80';
                    }
                });
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    private obtenerImgFtp(nombre: string) {
        const objEnviar = {
            nombreImg: nombre,
        };
        this.imagen.getImagenByFtp(objEnviar).subscribe((res) => {
            this.createImageFromBlob(res);
        });
    }

    createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener(
            'load',
            () => {
                this.imgFromFtp = reader.result;
            },
            false
        );

        if (image) {
            reader.readAsDataURL(image);
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

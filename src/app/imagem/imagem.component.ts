import { Component, Input } from '@angular/core';

@Component({
    selector: 'vitor-imagem',
    templateUrl: 'imagem.component.html',
    styleUrls: ['imagem.component.css'],
})

export class ImagemComponent {

    @Input() desc='';
    @Input() nome='';
    @Input() url='';

  }

  
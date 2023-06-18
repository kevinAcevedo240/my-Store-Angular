import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault='./assets/images/404.png';
  // counter = 0;
  // counterFn: number | undefined;

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}

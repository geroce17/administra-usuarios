import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';
import { emit } from 'process';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {

  @Output() outEven: EventEmitter<any> = new EventEmitter();
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Output() contador: EventEmitter<any> = new EventEmitter();
  @Output() escrito: EventEmitter<any> = new EventEmitter();

  constructor(private router: ActivatedRoute) {
    super({
      url: 'http://localhost:3000',
      // options: {
      //   query: {
      //     monitor_id: router.snapshot.paramMap.get('monitor')
      //   }
      // }
    });

    this.listen();
  }

  joinSocket = (monitor_id: string) => {
    this.ioSocket.emit('room', monitor_id);
  }

  listen = () => {
    this.ioSocket.on('evento', res => this.callback.emit(res));
    this.ioSocket.on('escrito', res => this.escrito.emit(res));
    this.ioSocket.on('contador', res => this.contador.emit(res));
  }

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('evento', payload);
  }

  escribir = (escrito: string) => {
    this.ioSocket.emit('escrito', escrito);
  }

  closeConn() {
    this.disconnect();
  }
}

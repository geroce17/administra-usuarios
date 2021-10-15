import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { emit } from 'process';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasRef', { static: false }) canvasRef: any;
  monitor: string;

  public width = 800;
  public heigth = 800;

  private cx: CanvasRenderingContext2D;
  private points: Array<any> = [];
  isAvailable: boolean;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove = (e: any) => {
    if (e.target.id === 'canvasId' && this.isAvailable === true) {
      this.write(e);
    }
  }

  @HostListener('click', ['$event'])
  onClick = (e: any) => {
    if(e.target.id === 'canvasId') {
      this.isAvailable = !this.isAvailable;
    }
  }

  constructor(private router: ActivatedRoute,
    private cookieService: CookieService) { }

  ngAfterViewInit() {
    this.render();
  }

  ngOnInit(): void {
    this.monitor = this.router.snapshot.paramMap.get('monitor');
    this.cookieService.set('monitor_id', this.monitor);
    console.log(this.monitor);
  }

  private render(): any {
    const canvasEL = this.canvasRef.nativeElement;
    this.cx = canvasEL.getContext('2d');

    canvasEL.width = this.width;
    canvasEL.heigth = this.heigth;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

  }

  private write(res): any{
    const canvasEl: any = this.canvasRef.nativeElement;
    const rect =canvasEl.getBoundingClientRect();
    const prevPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top

    };
    this.writeSingle(prevPos);
  }

  private writeSingle = (prevPos, emit = true) => {
    this.points.push(prevPos);
    if(this.points.length > 3){
      const prevPos = this.points[this.points.length - 1]
      const nextPos = this.points[this.points.length - 2]

      this.drawOnCanvas(prevPos, nextPos);
    }
  }

  private drawOnCanvas(prevPos, currentPos){
    if(!this.cx){
      return;
    }
    this.cx.beginPath();
    if(prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  public clearZone = () => {
    this.points = [];
    this.cx.clearRect(0,0, this.width, this.heigth);
  }

}

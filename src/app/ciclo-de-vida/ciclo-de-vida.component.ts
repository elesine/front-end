import { RatingComponent } from './../utilidades/rating/rating.component';
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewInit,
  SimpleChanges,
  Input,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  @Input()
  title: string;
  timer: ReturnType<typeof setInterval>;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.title = '';
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    this.ratingComponent.ratingSeleccionado = 2;
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit(): void {
    console.log('onInit');
    this.timer = setInterval(()=> console.log(new Date(), 1000));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    clearInterval(this.timer
      );
  }
}

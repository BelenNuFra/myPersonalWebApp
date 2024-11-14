import { Component, OnInit, ViewChild, QueryList, ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChildren('image1, image2, image3, image4, image5, image6, image7') images!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

    const circularProgressElements = document.querySelectorAll(".circular-progress") as NodeListOf<HTMLElement>,
      progressValueElements = document.querySelectorAll(".progress-value");

    // Valores de progreso finales para cada barra
    const progressEndValues = [80, 80, 40, 30];
    const speed = 90;

    // Array para almacenar el progreso actual de cada barra (inicialmente en 0)
    const progresoActual = Array(circularProgressElements.length).fill(0);

    // Crear un Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circularProgress = entry.target as HTMLElement;
          const index = Array.from(circularProgressElements).indexOf(circularProgress);
          const progressEndValue = progressEndValues[index];

          // Si el progreso ya ha alcanzado el valor final, no hacer nada
          if (progresoActual[index] >= progressEndValue) {
            return; // No reiniciar la animación
          }

          // Iniciar o continuar la animación de progreso
          const progress = setInterval(() => {
            // Continuar desde el último valor registrado
            if (progresoActual[index] < progressEndValue) {
              progresoActual[index]++;
            }

            // Actualizar el texto de progreso
            const progressValue = progressValueElements[index] as HTMLElement;
            if (progressValue) {
              progressValue.textContent = `${progresoActual[index]}%`;
            }

            // Actualizar el fondo de cada circularProgress
            if (circularProgress) {
              circularProgress.style.background = `conic-gradient(#5cccc6 ${progresoActual[index] * 3.6}deg, #ededed 0deg)`;
            }

            // Si llegamos al valor final, detener la animación
            if (progresoActual[index] === progressEndValue) {
              clearInterval(progress); // Detener la animación
              observer.unobserve(circularProgress); // Dejar de observar el elemento después de la animación
            }
          }, speed);
        }
      });
    }, { threshold: 0.5 }); // Activar la animación cuando el 50% del elemento esté en pantalla

    // Asignar el observador a cada elemento circular
    circularProgressElements.forEach(element => observer.observe(element));




  }
}
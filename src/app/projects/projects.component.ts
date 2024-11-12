import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const circularProgressElements = document.querySelectorAll(".circular-progress") as NodeListOf<HTMLElement>,
      progressValueElements = document.querySelectorAll(".progress-value");

    // Valores de progreso finales para cada barra
    const progressEndValues = [90, 75, 60]; // Puedes ajustar estos valores como prefieras
    const speed = 100;

    circularProgressElements.forEach((circularProgress, index) => {
      let progresStartValue = 0;
      const progressEndValue = progressEndValues[index]; // Obtener el valor final específico para cada barra

      const progress = setInterval(() => {
        progresStartValue++;

        // Actualizar el texto de progreso
        const progressValue = progressValueElements[index] as HTMLElement;
        if (progressValue) {
          progressValue.textContent = `${progresStartValue}%`;
        }

        // Actualizar el fondo de cada circularProgress
        if (circularProgress) {
          circularProgress.style.background = `conic-gradient(#5cccc6 ${progresStartValue * 3.6}deg, #ededed 0deg)`;
        }

        if (progresStartValue === progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  }
}

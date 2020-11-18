import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {
  
  perfil = [
    {url:"https://media-exp1.licdn.com/dms/image/C4D03AQGCrnDpuFQ5QA/profile-displayphoto-shrink_200_200/0/1602771281820?e=1611187200&v=beta&t=d-nuSmsxMj6Gjffr8qC8meoeEmlQGkD14whY2ltnL6E",
  nome:"Vitor Araujo Portela Lima",
  desc:"Front-end Developer ReactJS & JavaScript | Android & Sistemas Web | Scrum Professional"},
    {url:"https://media-exp1.licdn.com/dms/image/C5603AQHsYXY8CyXC7w/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=Ti5NVQNMPKsuRHoH3cRETFS-nMsWEvTU8V6Rb2sCTEU",
  nome:"Eric Toyoda",
  desc:"Senior Talent Acquisition Manager | Diversity | Employer Branding | HR Digital Transformation"},
    {url:"https://media-exp1.licdn.com/dms/image/C4D03AQFP77LXhPCFYg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=HJZKqq6xdVHsV_JvhsDXYS4dPYzZO95PeufROegy6EE",
  nome:"Camila Ferreira Ribeiro",
  desc:"Senior Software Engineer na Avanade"},
  {url:"https://media-exp1.licdn.com/dms/image/C4D03AQGSGj8jEB7xZw/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=GCUdJNaAcT1QGqZFrL-uC7bOoiLo4O-sJNejkxnDKGw",
nome:"Geovana Ribeiro",
desc:"Software Engineer na Avanade"}
  ]
  
  constructor() { }
  ngOnInit(): void {  }

}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const alumno = {
        id: 1,
        name: 'Maria',
        lastname: 'Valencia'
    } 
    return `${alumno.id} ${alumno.name} ${alumno.lastname}`;
  }
}

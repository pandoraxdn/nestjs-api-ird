import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnos } from './entity/alumnos.entities';
import { Accesos } from './entity/accesos.entities';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Alumnos,
            Accesos,
        ]),
    ],
    controllers: [AlumnosController],
    providers: [AlumnosService]
})
export class AlumnosModule {}

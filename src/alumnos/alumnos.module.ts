import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnos } from './entity/alumnos.entities';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Alumnos,
        ]),
    ],
    controllers: [AlumnosController],
    providers: [AlumnosService]
})
export class AlumnosModule {}

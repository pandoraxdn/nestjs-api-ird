import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnos } from './alumnos/entity/alumnos.entities';
import { Accesos } from './alumnos/entity/accesos.entities';

@Module({
  imports: [
      AlumnosModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'najimi',
        password: 'pass',
        database: 'universidad',
        entities: [ Alumnos, Accesos ],
        synchronize: true, // false no recomendable en producción
        autoLoadEntities: true
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

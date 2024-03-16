import { 
    IsString, 
    MaxLength, 
    MinLength 
} from "class-validator";

export class CreateAlumnos{

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    nombre: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    ap_paterno: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    ap_materno: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    matricula: string;

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    carrera: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    password: string;
}

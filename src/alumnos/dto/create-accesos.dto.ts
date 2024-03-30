import { 
    IsInt, 
    IsString,
    IsOptional
} from "class-validator";

export class CreateAccesos{

    @IsInt()
    @IsOptional()
    alumnosIdAlumno:     number;

    @IsString()
    matricula:           string;

}

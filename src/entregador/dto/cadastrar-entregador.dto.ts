import { ApiProperty } from '@nestjs/swagger';

export class CadastrarEntregadorDTO {
	@ApiProperty()
	nome: string;

	@ApiProperty()
	sexo: string;

	@ApiProperty()
	dataNascimento: Date;
}

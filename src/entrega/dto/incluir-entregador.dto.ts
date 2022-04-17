import { ApiProperty } from '@nestjs/swagger';

export class IncluirEntregadorDTO {
	@ApiProperty()
	id: string;

	@ApiProperty()
	entregador: string;
}

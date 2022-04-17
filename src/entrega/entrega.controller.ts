import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EntregaService } from './entrega.service';
import { IncluirEntregadorDTO } from './dto/incluir-entregador.dto';

@Controller('entrega')
@ApiTags('Entrega')
export class EntregaController {
	constructor(private entregaService: EntregaService) {}

	@Get()
	listar() {
		return this.entregaService.listar();
	}

	@Get(':id')
	obter(@Param('id') id: string) {
		return this.entregaService.obter(id);
	}

	@Post()
	atribuirEntregador(@Body() incluirEntregadorDto: IncluirEntregadorDTO) {
		return this.entregaService.atribuirEntregador(incluirEntregadorDto);
	}

	@Post('concluir/:id')
	concluir(@Param('id') entregaId: string) {
		return this.entregaService.concluir(entregaId);
	}
}

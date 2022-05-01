import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntregaService } from './entrega.service';
import { IncluirEntregadorDTO } from './dto/incluir-entregador.dto';

@Controller('entrega')
@ApiTags('Entrega')
export class EntregaController {
	constructor(private entregaService: EntregaService) {}

	@Get()
	@ApiOperation({ summary: 'Retorna a lista de entregas da Api de Entregas' })
	listar() {
		return this.entregaService.listar();
	}

	@Get(':id')
	@ApiOperation({
		summary: 'Retorna uma Entrega da Api de Entrega com base no seu ID',
	})
	obter(@Param('id') id: string) {
		return this.entregaService.obter(id);
	}

	@Post()
	@ApiOperation({
		summary: 'Atribui uma Entrega a um Entregador',
		description:
			'Atribui uma entrega a um entregador passando o ID externo da entrega (parametro "id") e passando o Id interno do entregador (parametro "entregador")',
	})
	atribuirEntregador(@Body() incluirEntregadorDto: IncluirEntregadorDTO) {
		return this.entregaService.atribuirEntregador(incluirEntregadorDto);
	}

	@Post('concluir/:id')
	@ApiOperation({
		summary: 'Realiza a conclusão da entrega no sistema de Entregas',
		description:
			'Realiza a conclusão da entrega no sistema de Entregas com base no ID externo da entrega, posteriormente atualiza o status da entrega no sistema de entregadores também',
	})
	concluir(@Param('id') entregaId: string) {
		return this.entregaService.concluir(entregaId);
	}
}

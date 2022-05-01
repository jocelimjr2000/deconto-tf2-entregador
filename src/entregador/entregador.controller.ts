import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CadastrarEntregadorDTO } from './dto/cadastrar-entregador.dto';
import { EntregadorService } from './entregador.service';
import { AlterarEntregadorDTO } from './dto/alterar-entregador.dto';

@Controller('entregador')
@ApiTags('Entregador')
export class EntregadorController {
	constructor(private entregadorService: EntregadorService) {}

	@Get()
	@ApiOperation({ summary: 'Retorna a lista de Entregadores cadastrados' })
	listar() {
		return this.entregadorService.listar();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Obtem um Entregador com base no seu ID interno' })
	obter(@Param('id') id: string) {
		return this.entregadorService.obter(id);
	}

	@Post()
	@ApiOperation({ summary: 'Cadastra um Entregador na plataforma' })
	cadastrar(@Body() cadastrarEntregadorDTO: CadastrarEntregadorDTO) {
		return this.entregadorService.cadastrar(cadastrarEntregadorDTO);
	}

	@Put(':id')
	@ApiOperation({
		summary: 'Altera os dados de um entregador cadastrado na plataforma',
	})
	alterar(
		@Param('id') id: string,
		@Body() cadastrarEntregadorDTO: CadastrarEntregadorDTO,
	) {
		return this.entregadorService.alterar(id, cadastrarEntregadorDTO);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Deleta um entregador com o determinado ID' })
	remover(@Param('id') id: string) {
		return this.entregadorService.remover(id);
	}
}

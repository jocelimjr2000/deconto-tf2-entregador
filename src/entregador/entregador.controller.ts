import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CadastrarEntregadorDTO } from './dto/cadastrar-entregador.dto';
import { EntregadorService } from './entregador.service';
import { AlterarEntregadorDTO } from './dto/alterar-entregador.dto';

@Controller('entregador')
@ApiTags('Entregador')
export class EntregadorController {
	constructor(private entregadorService: EntregadorService) {}

	@Get()
	listar() {
		return this.entregadorService.listar();
	}

	@Get(':id')
	obter(@Param('id') id: string) {
		return this.entregadorService.obter(id);
	}

	@Post()
	cadastrar(@Body() cadastrarEntregadorDTO: CadastrarEntregadorDTO) {
		return this.entregadorService.cadastrar(cadastrarEntregadorDTO);
	}

	@Put(':id')
	alterar(
		@Param('id') id: string,
		@Body() cadastrarEntregadorDTO: CadastrarEntregadorDTO,
	) {
		return this.entregadorService.alterar(id, cadastrarEntregadorDTO);
	}

	@Delete(':id')
	remover(@Param('id') id: string) {
		return this.entregadorService.remover(id);
	}
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entregador, EntregadorDocument } from './entregador.model';
import { Model } from 'mongoose';
import { CadastrarEntregadorDTO } from './dto/cadastrar-entregador.dto';
import { AlterarEntregadorDTO } from './dto/alterar-entregador.dto';
import { Entrega } from '../entrega/entrega.model';

@Injectable()
export class EntregadorService {
	constructor(
		@InjectModel(Entregador.name)
		private entregadorModel: Model<EntregadorDocument>,
	) {}

	async listar(): Promise<Entregador[]> {
		return this.entregadorModel.find();
	}

	async cadastrar(cadastrarDto: CadastrarEntregadorDTO) {
		const criado = new this.entregadorModel(cadastrarDto);
		return criado.save();
	}

	async obter(id: string) {
		return this.entregadorModel.findById(id);
	}

	async alterar(id: string, dto: CadastrarEntregadorDTO) {
		return this.entregadorModel.findByIdAndUpdate(id, dto);
	}

	async remover(id: string) {
		return this.entregadorModel.findByIdAndRemove(id);
	}
}

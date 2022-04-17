import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entrega, EntregaDocument } from './entrega.model';
import { Model } from 'mongoose';
import { firstValueFrom, map, Observable, retry } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { IncluirEntregadorDTO } from './dto/incluir-entregador.dto';

@Injectable()
export class EntregaService {
	constructor(
		@InjectModel(Entrega.name)
		private entregaModel: Model<EntregaDocument>,
		private httpService: HttpService,
	) {}

	private BASE_URL = 'http://localhost:10000/';

	async listar() {
		const res = await firstValueFrom(
			this.httpService.get(`${this.BASE_URL}/entrega/`),
		);

		if (res.status !== 200) {
			return { error: 'Houve um erro. Tente Novamente' };
		}

		return res.data;
	}

	async obter(id: string) {
		const res = await firstValueFrom(
			this.httpService.post(`${this.BASE_URL}/entrega/${id}`),
		);

		if (res.status !== 200) {
			return { error: 'Houve um erro. Tente Novamente' };
		}

		return res.data;
	}

	async atribuirEntregador(dto: IncluirEntregadorDTO) {
		const res = await firstValueFrom(
			this.httpService.put(`${this.BASE_URL}/entrega/entregador`, dto),
		);

		if (res.status === 200) {
			const entregaCriada = new this.entregaModel(res.data);

			return entregaCriada.save();
		}

		return { error: 'Houve um erro. Tente Novamente' };
	}

	async concluir(id: string) {
		const res = await firstValueFrom(
			this.httpService.put(`${this.BASE_URL}/entrega/concluir/${id}`),
		);

		if (res.status === 200) {
			return this.entregaModel.findOneAndUpdate(
				{ id: id },
				{ entregue: true },
				{ new: true },
			);
		} else {
			return {
				error:
					'Não foi possível concluir a entrega no sistema externo, tente novamente mais tarde',
			};
		}
	}
}

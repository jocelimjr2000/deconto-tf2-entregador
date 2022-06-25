import { Controller, Get } from '@nestjs/common';
import {
	Ctx,
	MessagePattern,
	Payload,
	RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { EntregadorService } from './entregador/entregador.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly entregadorService: EntregadorService,
	) {}

	/**
	 *   {
	 *      "id": "teste",
	 *      "pattern": "my-pattern",
	 *       "data": {
	 *           "fieldOne": 1
	 *       }
	 *   }
	 */
	@MessagePattern('find-entregador')
	async execute(@Payload() data: any, @Ctx() context: RmqContext) {
		const entregador = await this.entregadorService.obter(data.id);

		console.log(entregador);

		console.log('>>>>>>', data);

		return entregador;
	}
}

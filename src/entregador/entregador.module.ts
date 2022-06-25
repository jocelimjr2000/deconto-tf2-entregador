import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntregadorController } from './entregador.controller';
import { Entregador, EntregadorSchema } from './entregador.model';
import { EntregadorService } from './entregador.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Entregador.name, schema: EntregadorSchema },
		]),
	],
	controllers: [EntregadorController],
	providers: [EntregadorService],
	exports: [EntregadorService],
})
export class EntregadorModule {}

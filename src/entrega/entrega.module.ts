import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntregaController } from './entrega.controller';
import { Entrega, EntregaSchema } from './entrega.model';
import { EntregaService } from './entrega.service';
import { EntregadorModule } from '../entregador/entregador.module';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Entrega.name, schema: EntregaSchema }]),
		HttpModule,
	],
	controllers: [EntregaController],
	providers: [EntregaService],
})
export class EntregaModule {}

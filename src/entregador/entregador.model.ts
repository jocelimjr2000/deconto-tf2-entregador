import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Entrega } from 'src/entrega/entrega.model';

export type EntregadorDocument = Entregador & Document;

@Schema()
export class Entregador {
	@Prop()
	nome: string;

	@Prop()
	sexo: string;

	@Prop()
	dataNascimento: Date;
}

export const EntregadorSchema = SchemaFactory.createForClass(Entregador);

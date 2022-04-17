import { Entregador } from '../entregador/entregador.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type EntregaDocument = Entrega & Document;

@Schema()
export class Entrega {
	@Prop()
	id: string;

	@Prop()
	destinatario: string;

	@Prop()
	cpf: string;

	@Prop()
	cep: string;

	@Prop()
	endereco: string;

	@Prop()
	numero: string;

	@Prop()
	bairro: string;

	@Prop()
	cidade: string;

	@Prop()
	entregue: boolean;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: Entregador.name })
	entregador: Entregador;
}

export const EntregaSchema = SchemaFactory.createForClass(Entrega);

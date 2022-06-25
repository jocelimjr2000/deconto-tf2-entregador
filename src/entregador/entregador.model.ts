import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

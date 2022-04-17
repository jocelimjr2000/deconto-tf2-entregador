import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntregadorModule } from './entregador/entregador.module';
import { EntregaModule } from './entrega/entrega.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://usuariopadrao:mongo123@cluster0.roeri.mongodb.net/deconto-tf1-entregador',
    ),
    EntregadorModule,
    EntregaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

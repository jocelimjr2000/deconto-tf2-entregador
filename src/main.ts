import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://root:root@localhost`],
      queue: "entregadores",
      replyQueue: "entregadores.reply",
      queueOptions: {
        durable: true,
          // deadLetterExchange: "x-dead-letter-exchange",
          // deadLetterRoutingKey: "entregadores.dead",
      },
    },
  });

  app.startAllMicroservices();
  
  const config = new DocumentBuilder()
    .setTitle('API de Entregadores')
    .setDescription(
      'Documentação da Api de Entregadores para o trabalho de Integração de Sistemas de Softwares',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();

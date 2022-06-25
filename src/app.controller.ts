import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  execute(
    @Payload() data: any,
    @Ctx() context: RmqContext
  ) {
    const entregador = {"message": "vindo do nestjs"};

    const id = data.id;
  
    console.log('>>>>>>', data);

    return entregador;
  }
}

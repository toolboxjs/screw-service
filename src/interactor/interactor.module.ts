import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InteractorService } from './interacrot.service';
import { InteractorController } from './interactor.controller';
import { InteractorEntity } from './interactor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InteractorEntity])],
  providers: [InteractorService],
  controllers: [InteractorController]
})
export class InteractorModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes({ path: 'interactors', method: RequestMethod.GET });
  }
}

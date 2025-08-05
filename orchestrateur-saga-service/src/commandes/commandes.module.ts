import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CommandesController } from './commandes.controller';

@Module({
  providers: [CommandesService],
  controllers: [CommandesController]
})
export class CommandesModule {}

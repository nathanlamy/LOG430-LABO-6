import { Module } from '@nestjs/common';
import { PanierController } from './panier.controller';
import { PanierService } from './panier.service';

@Module({
  controllers: [PanierController],
  providers: [PanierService]
})
export class PanierModule {}

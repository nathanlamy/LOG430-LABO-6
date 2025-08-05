import { Module } from '@nestjs/common';
import { PanierController } from './panier.controller';
import { PanierService } from './panier.service';

@Module({
  controllers: [PanierController],
  providers: [PanierService],
  exports: [PanierService], // Exporting PanierService to be used in other modules
})
export class PanierModule {}

import { Module } from '@nestjs/common';
import { RecepientsService } from './recepients.service';
import { RecepientsController } from './recepients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RecepientsController],
  providers: [RecepientsService],
  imports: [PrismaModule],
})
export class RecepientsModule {}

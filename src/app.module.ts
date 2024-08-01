import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { DonorsModule } from './donors/donors.module';
import { DonationsModule } from './donations/donations.module';
import { RecepientsModule } from './recepients/recepients.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    PrismaModule,
    OrganizationsModule,
    DonorsModule,
    DonationsModule,
    RecepientsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}

  async createEvent(createEventDto: CreateEventDto) {
    const newEvent = await this.prismaService.events.create({
      data: createEventDto,
    });
    return {
      message: 'Event created successfully',
      data: newEvent,
    };
  }

  async getEventById(id: string) {
    const eventById = await this.prismaService.events.findUnique({
      where: { id },
    });
    return eventById;
  }

  async getAllEvent() {
    const allEvents = await this.prismaService.events.findMany();
    return allEvents;
  }

  async updateEventById(id: string, updateEventDto: UpdateEventDto) {
    const updatedEvent = await this.prismaService.events.update({
      where: { id },
      data: updateEventDto,
    });
    return {
      message: 'Event updated successfully',
      updatedEvent,
    };
  }
}

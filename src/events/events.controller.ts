import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() data: CreateEventDto) {
    return this.eventsService.createEvent(data);
  }

  @Get()
  getAllEvents() {
    return this.eventsService.getAllEvent();
  }

  @Get(':id')
  getEventById(@Param('id') id: string) {
    return this.eventsService.getEventById(id);
  }

  @Patch(':id')
  updateEventById(
    @Param('id') id: string,
    @Body() updateEventDto: CreateEventDto,
  ) {
    return this.eventsService.updateEventById(id, updateEventDto);
  }
}

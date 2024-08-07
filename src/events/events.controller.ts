import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/Role/role.decorator';
import { Role } from 'src/Role/role.enum';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  createEvent(@Body() data: CreateEventDto) {
    return this.eventsService.createEvent(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getAllEvents() {
    return this.eventsService.getAllEvent();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getEventById(@Param('id') id: string) {
    return this.eventsService.getEventById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  updateEventById(
    @Param('id') id: string,
    @Body() updateEventDto: CreateEventDto,
  ) {
    return this.eventsService.updateEventById(id, updateEventDto);
  }
}

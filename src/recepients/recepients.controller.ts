import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  UseGuards,
} from '@nestjs/common';
import { RecepientsService } from './recepients.service';
import { CreateRecipientDto } from './dto/create-recepient.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/Role/role.decorator';
import { Role } from 'src/Role/role.enum';

@Controller('recepients')
export class RecepientsController {
  constructor(private readonly recepientsService: RecepientsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  createRecepient(@Body() createRecepientDto: CreateRecipientDto) {
    return this.recepientsService.createRecepient(createRecepientDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getAllRecepient() {
    return this.recepientsService.getAllRecepient();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getRecepientById(@Param('id') id: string) {
    return this.recepientsService.getRecepientById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  updateRecepientById(
    @Param('id') id: string,
    @Body() updateRecepientDto: CreateRecipientDto,
  ) {
    return this.recepientsService.updateRecepientById(id, updateRecepientDto);
  }
}

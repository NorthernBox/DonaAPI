import { Controller, Post, Get, Param, Patch, Body } from '@nestjs/common';
import { RecepientsService } from './recepients.service';
import { CreateRecipientDto } from './dto/create-recepient.dto';

@Controller('recepients')
export class RecepientsController {
  constructor(private readonly recepientsService: RecepientsService) {}

  @Post()
  createRecepient(@Body() createRecepientDto: CreateRecipientDto) {
    return this.recepientsService.createRecepient(createRecepientDto);
  }

  @Get()
  getAllRecepient() {
    return this.recepientsService.getAllRecepient();
  }

  @Get(':id')
  getRecepientById(@Param('id') id: string) {
    return this.recepientsService.getRecepientById(id);
  }

  @Patch(':id')
  updateRecepientById(
    @Param('id') id: string,
    @Body() updateRecepientDto: CreateRecipientDto,
  ) {
    return this.recepientsService.updateRecepientById(id, updateRecepientDto);
  }
}

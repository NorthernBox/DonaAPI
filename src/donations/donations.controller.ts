import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  createDonation(@Body() data: CreateDonationDto) {
    return this.donationsService.createDonation(data);
  }

  @Get()
  getAllDonations() {
    return this.donationsService.getAllDonations();
  }

  @Get(':id')
  getDonationById(@Param('id') id: string) {
    return this.donationsService.getDonationById(id);
  }

  @Patch(':id')
  updateDonationById(
    @Param('id') id: string,
    @Body() updateDonationDto: UpdateDonationDto,
  ) {
    return this.donationsService.UpdateDonationById(id, updateDonationDto);
  }
}

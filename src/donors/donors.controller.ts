import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  createDonor(@Body() createDonorDto: CreateDonorDto) {
    return this.donorsService.createNewDonor(createDonorDto);
  }

  @Get(':id')
  getDonorById(@Param('id') id: string) {
    return this.donorsService.getDonorById(id);
  }

  @Get()
  getAllDonors() {
    return this.donorsService.getAllDonors();
  }

  @Patch(':id')
  updateDonorById(
    @Param('id') id: string,
    @Body() updateDonor: UpdateDonorDto,
  ) {
    return this.donorsService.updateDonorById(id, updateDonor);
  }
}

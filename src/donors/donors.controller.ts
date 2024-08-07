import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/Role/role.decorator';
import { Role } from 'src/Role/role.enum';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  createDonor(@Body() createDonorDto: CreateDonorDto) {
    return this.donorsService.createNewDonor(createDonorDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getDonorById(@Param('id') id: string) {
    return this.donorsService.getDonorById(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getAllDonors() {
    return this.donorsService.getAllDonors();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  updateDonorById(
    @Param('id') id: string,
    @Body() updateDonor: UpdateDonorDto,
  ) {
    return this.donorsService.updateDonorById(id, updateDonor);
  }
}

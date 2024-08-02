import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrgDto } from './dto/createOrg.dto';
import { UpdateOrgDto } from './dto/updateOrg.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  createOrg(@Body() createOrgDto: CreateOrgDto) {
    return this.organizationsService.createOrganization(createOrgDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllOrganizations() {
    return this.organizationsService.getAllOrganizations();
  }

  @Get(':id')
  getOrgById(@Param('id') id: string) {
    return this.organizationsService.getOrgById(id);
  }

  @Patch(':id')
  updateOrgById(@Param('id') id: string, @Body() updateOrgDto: UpdateOrgDto) {
    return this.organizationsService.updateOrgById(id, updateOrgDto);
  }
}

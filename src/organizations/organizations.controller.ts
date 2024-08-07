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
import { Role } from 'src/Role/role.enum';
import { Roles } from 'src/Role/role.decorator';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  createOrg(@Body() createOrgDto: CreateOrgDto) {
    return this.organizationsService.createOrganization(createOrgDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getAllOrganizations() {
    return this.organizationsService.getAllOrganizations();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  getOrgById(@Param('id') id: string) {
    return this.organizationsService.getOrgById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  updateOrgById(@Param('id') id: string, @Body() updateOrgDto: UpdateOrgDto) {
    return this.organizationsService.updateOrgById(id, updateOrgDto);
  }
}

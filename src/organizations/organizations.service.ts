import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrgDto } from './dto/createOrg.dto';
import { UpdateOrgDto } from './dto/updateOrg.dto';

@Injectable()
export class OrganizationsService {
  constructor(private prismaService: PrismaService) {}

  async createOrganization(createOrgDto: CreateOrgDto) {
    console.log(createOrgDto);
    const newOrg = await this.prismaService.organization.create({
      data: createOrgDto,
    });
    return {
      message: 'Organization created Successfully',
      data: newOrg,
    };
  }

  async getAllOrganizations() {
    return this.prismaService.organization.findMany();
  }

  async getOrgById(id: string) {
    const orgById = this.prismaService.organization.findUnique({
      where: { id },
    });
    return orgById;
  }

  async updateOrgById(id: string, updateOrgDto: UpdateOrgDto) {
    const updatedOrg = await this.prismaService.organization.update({
      where: { id },
      data: updateOrgDto,
    });
    return {
      message: 'Organization updated Successfully',
      data: updatedOrg,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Injectable()
export class DonorsService {
  constructor(private prismaService: PrismaService) {}

  async createNewDonor(createDonorDto: CreateDonorDto) {
    const newDonor = await this.prismaService.donor.create({
      data: createDonorDto,
    });

    return {
      message: 'Donor created Successfully',
      data: newDonor,
    };
  }

  async getDonorById(id: string) {
    const donorById = await this.prismaService.donor.findUnique({
      where: { id: id },
    });
    return donorById;
  }

  async getAllDonors() {
    const allDonors = await this.prismaService.donor.findMany();
    return allDonors;
  }

  async updateDonorById(id: string, updateDonor: UpdateDonorDto) {
    const updatedDonor = await this.prismaService.donor.update({
      where: { id: id },
      data: updateDonor,
    });
    return {
      message: 'Donor updated successfully',
      data: updatedDonor,
    };
  }
}

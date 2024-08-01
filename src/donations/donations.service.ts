import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';

@Injectable()
export class DonationsService {
  constructor(private prismaService: PrismaService) {}

  async createDonation(data: CreateDonationDto) {
    const newDonation = await this.prismaService.donation.create({
      data,
    });
    return {
      message: 'Donation created successfully',
      newDonation,
    };
  }

  async getAllDonations() {
    return this.prismaService.donation.findMany();
  }

  async getDonationById(id: string) {
    const donotationById = await this.prismaService.donation.findUnique({
      where: { id: id },
    });

    return donotationById;
  }

  async UpdateDonationById(id: string, updateDonationDto: UpdateDonationDto) {
    const updatedDonation = await this.prismaService.donation.update({
      where: { id: id },
      data: updateDonationDto,
    });
    return {
      message: 'Donation updated successfully',
      updatedDonation,
    };
  }
}

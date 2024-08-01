import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipientDto } from './dto/create-recepient.dto';
import { UpdateRecepientDto } from './dto/update-recepient.dto';

@Injectable()
export class RecepientsService {
  constructor(private prismaService: PrismaService) {}

  async createRecepient(createRecepientDto: CreateRecipientDto) {
    const newRecepient = await this.prismaService.recipient.create({
      data: createRecepientDto,
    });
    return {
      message: 'Recipient created successfully',
      data: newRecepient,
    };
  }

  async getRecepientById(id: string) {
    const recepientById = await this.prismaService.recipient.findUnique({
      where: { id: id },
    });
    return recepientById;
  }

  async getAllRecepient() {
    const allRecepients = await this.prismaService.recipient.findMany();
    return allRecepients;
  }

  async updateRecepientById(
    id: string,
    updateRecepientDto: UpdateRecepientDto,
  ) {
    const updatedRecepient = await this.prismaService.recipient.update({
      where: { id: id },
      data: updateRecepientDto,
    });
    return {
      message: 'Recipient updated successfully',
      updatedRecepient,
    };
  }
}

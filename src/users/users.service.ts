import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundError } from 'rxjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const organization = await this.prismaService.organization.findUnique({
      where: { id: data.orgId },
    });
    if (!organization) {
      throw new NotFoundError('Organization not found');
    }
    const newUser = await this.prismaService.user.create({
      data,
    });
    return {
      message: 'User created successfully',
      data: newUser,
    };
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: string) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    if (!foundUser) {
      throw new NotFoundError('User not found');
    }
    return foundUser;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prismaService.user.update({
      where: { id: id },
      data: updateUserDto,
    });
    return {
      message: 'User updated successfully',
      updatedUser,
    };
  }
}

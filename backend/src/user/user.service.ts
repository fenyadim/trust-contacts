import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(dto: CreateUserDto) {
    const rawUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
      },
    });

    const { password, ...user } = rawUser;

    return user;
  }
}

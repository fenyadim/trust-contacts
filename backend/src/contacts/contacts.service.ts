import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(parentId: string) {
    return await this.prisma.contact.findMany({
      where: { userId: parentId },
    });
  }

  async create(parentId: string, dto: CreateContactDto) {
    const findContacts = await this.prisma.contact.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (findContacts)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);

    return await this.prisma.contact.create({
      data: { ...dto, userId: parentId },
    });
  }

  async update(parentId: string, id: string, dto: UpdateContactDto) {
    await this.prisma.contact.update({
      where: { id, userId: parentId },
      data: dto,
    });
  }

  async delete(parentId: string, id: string) {
    await this.prisma.contact.delete({ where: { id, userId: parentId } });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthRequest } from 'interfaces/auth-user.interface';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAll(@Req() req: AuthRequest) {
    return await this.contactsService.getAll(req.user.userId);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Req() req: AuthRequest, @Body() dto: CreateContactDto) {
    return await this.contactsService.create(req.user.userId, dto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Req() req: AuthRequest,
    @Param() id: string,
    @Body() dto: UpdateContactDto,
  ) {
    return await this.contactsService.update(req.user.userId, id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Req() req: AuthRequest, @Param() id: string) {
    return await this.contactsService.delete(req.user.userId, id);
  }
}

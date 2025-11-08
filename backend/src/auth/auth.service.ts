import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthBody } from './types/auth.types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthBody): Promise<{ access_token: string }> {
    const user = await this.userService.getByEmail(authDto.email);
    if (!user || authDto.password !== user.password) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(authDto: AuthBody): Promise<{ access_token: string }> {
    const findUser = await this.userService.getByEmail(authDto.email);
    if (findUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const user = await this.userService.create(authDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

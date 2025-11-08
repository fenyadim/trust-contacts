import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthBody } from './types/auth.types';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(authDto: AuthBody): Promise<{
        access_token: string;
    }>;
    register(authDto: AuthBody): Promise<{
        access_token: string;
    }>;
}

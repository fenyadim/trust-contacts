import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getByEmail(email: string): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
    } | null>;
    create(dto: CreateUserDto): Promise<{
        email: string;
        id: string;
        createdAt: Date;
    }>;
}

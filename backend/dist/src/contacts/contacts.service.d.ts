import { PrismaService } from 'src/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(parentId: string): Promise<{
        id: string;
        name: string;
        phone: string;
        email: string;
        tags: string[];
        userId: string | null;
        lastInteraction: Date;
    }[]>;
    create(parentId: string, dto: CreateContactDto): Promise<{
        id: string;
        name: string;
        phone: string;
        email: string;
        tags: string[];
        userId: string | null;
        lastInteraction: Date;
    }>;
    update(parentId: string, id: string, dto: UpdateContactDto): Promise<void>;
    delete(parentId: string, id: string): Promise<void>;
}

import { AuthRequest } from 'interfaces/auth-user.interface';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAll(req: AuthRequest): Promise<{
        id: string;
        name: string;
        phone: string;
        email: string;
        tags: string[];
        userId: string | null;
        lastInteraction: Date;
    }[]>;
    create(req: AuthRequest, dto: CreateContactDto): Promise<{
        id: string;
        name: string;
        phone: string;
        email: string;
        tags: string[];
        userId: string | null;
        lastInteraction: Date;
    }>;
    update(req: AuthRequest, id: string, dto: UpdateContactDto): Promise<void>;
    delete(req: AuthRequest, id: string): Promise<void>;
}

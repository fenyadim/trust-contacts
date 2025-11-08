"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ContactsService = class ContactsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(parentId) {
        return await this.prisma.contact.findMany({
            where: { userId: parentId },
        });
    }
    async create(parentId, dto) {
        const findContacts = await this.prisma.contact.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (findContacts)
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        return await this.prisma.contact.create({
            data: { ...dto, userId: parentId },
        });
    }
    async update(parentId, id, dto) {
        await this.prisma.contact.update({
            where: { id, userId: parentId },
            data: dto,
        });
    }
    async delete(parentId, id) {
        await this.prisma.contact.delete({ where: { id, userId: parentId } });
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map
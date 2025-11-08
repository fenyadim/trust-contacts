import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  // imports: [
  //   JwtModule.registerAsync({
  //     imports: [ConfigModule],
  //     useFactory: (configService: ConfigService) => ({
  //       secret: configService.get<string>('JWT_SECRET'),
  //       signOptions: { expiresIn: '1h' },
  //     }),
  //     inject: [ConfigService],
  //   }),
  // ],
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService],
})
export class ContactsModule {}

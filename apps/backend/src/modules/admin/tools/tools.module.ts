import { Module } from '@nestjs/common';
import { EmailController } from './email/email.controller';
import { EmailService } from '@/shared/services/email.service';
import { StorageService } from './storage/storage.service';
import { StorageController } from './storage/storage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ToolStorage from '@/entities/admin/tool-storage.entity';
import { SysUser } from '@/entities/admin/sys-user.entity';
import { DictionaryService } from './dictionary/dictionary.service';
import { DictionaryController } from './dictionary/dictionary.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ToolStorage, SysUser])],
  controllers: [EmailController, StorageController, DictionaryController],
  providers: [EmailService, StorageService, DictionaryService],
  exports: [EmailService, StorageService],
})
export class ToolsModule {}

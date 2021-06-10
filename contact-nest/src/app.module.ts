import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [ContactsModule, TypeOrmModule.forRoot()], // forRoot() 만 써놓으면 알아서 ormconfig.json을 매핑한다.
  controllers: [],
  providers: [],
})
export class AppModule {}

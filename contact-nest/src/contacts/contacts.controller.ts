import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common/decorators";
import {ContactsService} from "./contacts.service";
import {Post} from "@nestjs/common";
import {contact} from "./entities/contact.entity";


@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService : ContactsService) {
    }

    @Get()
    async findAll(): Promise<contact[]>{
        return this.contactsService.findAll();
    }
    // exception 처리도 해줄 것.
    @Post()
    create(@Body() contactData: contact){
        return this.contactsService.create(contactData);
    }

    @Patch(":id")
    async patch(@Param("id") id: string, @Body() contactData: contact) {
        return this.contactsService.patch(id, contactData);
    }

    @Delete(":id")
    async delete(@Param("id") id: string): Promise<contact[]> {
        return this.contactsService.delete(id);
    }
}

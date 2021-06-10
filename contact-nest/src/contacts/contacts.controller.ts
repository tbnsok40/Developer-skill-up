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

    // nest transform 으로 어케 할 수 없을까
    // @Delete("/:id")
    // delete(@Param('id') id) {
    //     // param내부에 id를 넣고 다시 테스트 해볼것
    //     const idx =JSON.stringify(id)
    //     const idxx = JSON.parse(idx)
    //     return this.contactsService.deleteData(idxx.id);
    // }

}

// axios, fetch(): browser단 지원 => 공부

import {Body, Controller, Delete, Get, Param} from '@nestjs/common/decorators';
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

    // @Get(":id")
    // async findById(@Param("id") id: number): Promise<contact[]>{
    //     return this.contactsService.findById(id);
    // }



    // async findAll(): Promise<Contact[]> {
    //     return this.contactsService.getAll();
    // }
    // @Get(":id") 이런 방법도 가능
    // exception 처리도 해줄 것.

    @Post()
    create(@Body() contactData){
        return this.contactsService.create(contactData);
    }

    @Delete(":id")
    async delete(@Param('id') id): Promise<contact[]> {
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

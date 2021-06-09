import { Get, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { contact } from "./entities/contact.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(contact) private contactRepository: Repository<contact>
  ) {
  }

  findAll(): Promise<contact[]> {
    return this.contactRepository.find();
  }

  findById(id): Promise<contact[]> {
    return this.contactRepository.findByIds(id);
  }

  create(contactData) {
    console.log(contactData);
    return this.contactRepository.save(contactData);
  }

  // private contacts = [];
  // getAll() {
  //     return this.contacts
  // }
  //
  // createData(contactData) {
  //     const returnData = {
  //         id: this.contacts.length + 1,
  //         ...contactData
  //     }
  //     this.contacts.push(returnData)
  //     return this.contacts;
  // }
  //
  delete(id): Promise<contact[]> {
    return this.contactRepository.delete(id).then((r) => {
        return this.contactRepository.find();
      }
    );
  }
}

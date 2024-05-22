import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
    ){}

    create(createUserDto: CreateUserDto){
        const user = this.repo.create(createUserDto)
        return this.repo.save(user)
    }

    findOne(id: number){
        return this.repo.findOne({where: {id}})
    }

    find(email: string){
        return this.repo.find( {where: { email }})
    }

    async update(id: number, attrs: Partial<User>){
        const user = await this.findOne(id)
        if(!user){
            throw new NotFoundException('user not found')
        }
        Object.assign(user, attrs)
        return this.repo.save(user)
    }

    async remove(id: number){
        const user = await this.findOne(id);
        if(!user){
            throw new NotFoundException('user not found')
        }
        return this.repo.remove(user)
    }
}

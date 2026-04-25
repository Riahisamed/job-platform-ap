import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}


async create(userData: Partial<User>) {
  if (!userData.password) {
    throw new Error('Password is required');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = this.userRepo.create({
    ...userData,
    password: hashedPassword,
  });

  return this.userRepo.save(user);
}

  findAll() {
    return this.userRepo.find();
  }
  findOne(id: number) {
  return this.userRepo.findOneBy({ id });
}
async login(email: string, password: string) {
  const user = await this.userRepo.findOneBy({ email });

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const { password: _, ...result } = user;
const payload = { sub: user.id, email: user.email };

return {
  access_token: this.jwtService.sign(payload),
};
}

}
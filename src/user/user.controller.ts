import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Param } from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
}

}
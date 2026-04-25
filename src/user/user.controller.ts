import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Param } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
  import { ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @UseGuards(AuthGuard)
@Get()
findAll() {
  return this.userService.findAll();
}

@UseGuards(AuthGuard)
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return this.userService.findOne(id);
}
@Post('login')
login(@Body() body: any) {
  return this.userService.login(body.email, body.password);
}


}
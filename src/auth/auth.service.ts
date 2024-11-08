import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const newUser = new this.userModel({ email, password });
    return await newUser.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    console.log('User:', user);
    if (user && (await user.validatePassword(password))) {
      const payload = { email: user.email, sub: user._id };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    throw new Error('Invalid credentials');
  }
}

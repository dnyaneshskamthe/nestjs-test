import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}

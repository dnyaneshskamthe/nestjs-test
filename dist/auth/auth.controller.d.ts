import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
}

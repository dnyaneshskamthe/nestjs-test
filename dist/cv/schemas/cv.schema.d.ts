import { Document, Types } from 'mongoose';
export declare class CV extends Document {
    title: string;
    description: string;
    skills: string[];
    experience: string[];
    user: Types.ObjectId;
}
export declare const CVSchema: import("mongoose").Schema<CV, import("mongoose").Model<CV, any, any, any, Document<unknown, any, CV> & CV & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CV, Document<unknown, {}, import("mongoose").FlatRecord<CV>> & import("mongoose").FlatRecord<CV> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;

import { Document, Types, Schema as MongooseSchema, Model } from 'mongoose';
import { VoiceType, VoiceSource, VoiceGender, RegionCode, TaskVoxModel } from '../enums/user-enums';
export type ClientVoiceGalleryDocument = ClientVoiceGallery & Document;
export declare class ClientVoiceGallery {
    voiceGalleryId: Types.ObjectId;
    model: TaskVoxModel;
    userId: Types.ObjectId;
    tenantID: string;
    displayAgentName: string;
    type: VoiceType;
    source: VoiceSource;
    voiceId?: string;
    voiceGender?: VoiceGender;
    voiceName?: string;
    fileUrl: string;
    description: string;
    isEnabled: boolean;
    isCreditSufficient: boolean;
    isDefault: boolean;
    predefinedVoiceName: string;
    createdAt: Date;
    maxVoicesAllowed: number;
    isVoicePermanentlyDisabled: boolean;
    regionCode: RegionCode;
    additionalMetadata?: Record<string, any>;
}
export declare const ClientVoiceGallerySchema: MongooseSchema<ClientVoiceGalleryDocument, Model<ClientVoiceGalleryDocument>>;
//# sourceMappingURL=client-voice-gallery.schema.d.ts.map
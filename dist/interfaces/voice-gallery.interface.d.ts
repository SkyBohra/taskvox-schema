import { VoiceType, VoiceSource, VoiceGender, RegionCode, TaskVoxModel } from '../enums/user-enums';
export interface IVoiceGallery {
    type: VoiceType;
    source: VoiceSource;
    voiceId?: string;
    voiceGender?: VoiceGender;
    model: TaskVoxModel;
    voiceName?: string;
    fileUrl: string;
    description: string;
    isEnabled: boolean;
    isDefault: boolean;
    regionCode: RegionCode;
    isCreditSufficient: boolean;
    predefinedVoiceName: string;
    createdAt: Date;
    maxVoicesAllowed: number;
    isVoicePermanentlyDisabled: boolean;
    additionalMetadata?: Record<string, any>;
    updatedAt: Date;
}
//# sourceMappingURL=voice-gallery.interface.d.ts.map
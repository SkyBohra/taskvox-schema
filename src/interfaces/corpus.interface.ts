import { Model } from "mongoose";
import { CorpusStatus, TaskVoxModel } from "../enums/user-enums";


export interface ICorpusStats {
    status: CorpusStatus;
    lastUpdated?: Date;
    numChunks?: number;
    numDocs?: number;
    numVectors?: number;
}

export interface ICorpus {
    name: string;
    description: string;
    externalCorpusId: string;        // updated from `externalCorpusId`
    created: Date;
    stats: ICorpusStats;
    isCreatedByTaskvox: boolean;
    model: TaskVoxModel; // Added type field to distinguish from other schemas
}

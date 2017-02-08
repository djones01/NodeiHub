import { IntegrationSchedule } from './integration-schedule';
import { Conversion } from './conversion';

export interface Integration {
    name: string;
    description: string;
    sourceSystem: string;
    targetSystem: string;
    schedule: IntegrationSchedule;
    conversions: Conversion[];
}
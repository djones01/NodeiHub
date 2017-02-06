import { Integration } from './integration';
import { ProjectUser } from './project-user';

export interface Project {
    name: string;
    description: string;
    type: ProjectType;
    integrations: Integration[];
    projectUsers: ProjectUser[]; 
}

type ProjectType = 'Upgrade' | 'Enhancement' | 'New Installation' | 'Retrofit';
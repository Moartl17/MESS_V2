import { SubProjects } from './subprojects';

export class Project {
    id!: number;
    name!: string;
    company!: string;
    shortDesc!: string;
    technologies!: string;
    isExpanded!: boolean;
    from!: string;
    to!: string;
    subProjects!: SubProjects[];

}
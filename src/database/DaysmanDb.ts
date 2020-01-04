import Dexie from 'dexie';

export class DaysmanDb extends Dexie {
  entries: Dexie.Table<Entry, number>;
  projects: Dexie.Table<Project, number>;
  companies: Dexie.Table<Company, number>;

  constructor() {
    super('DaysmanDb');
    this.version(1).stores({
      entries: '++id, &remoteId, userId, content, projectId, tags, start, end',
      projects: '++id, &remoteId, userId, name, companyId',
      companies: '++id, &remoteId, userId, name',
    });
    this.entries = this.table('entries');
    this.projects = this.table('projects');
    this.companies = this.table('companies');
  }
}

export interface Entry {
  id?: number;
  userId?: string;
  remoteId?: string;
  content?: string;
  projectId?: string;
  tags?: string[];
  start: number;
  end?: number;
}

export interface Project {
  id?: number;
  userId?: string;
  remoteId?: string;
  name: string;
  companyId?: string;
}

export interface Company {
  id?: number;
  userId?: string;
  remoteId?: string;
  name: string;
}

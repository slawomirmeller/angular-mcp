export interface ProcessStep {
  id: string;
  stepNo: number;
  processId: number
  code: string;
  name: string;
  creationDate: Date;
  createdBy: string;
  modificationDate?: Date;
  modifiedBy?: string;
  status: string;
  startedBy?: string;
  startedOn?: Date;
  finishedOn?: Date;
  acceptanceDate?: Date;
  acceptedBy?: string;
  parameters?: any[];
  progress?: number;
}

export const steps: ProcessStep[] = [
  {
    id: "234",
    stepNo: 1,
    processId: 1,
    code: "GENPSKL",
    name: "Premiums written generation",
    creationDate: new Date(),
    createdBy: "Rick Brzozowski",
    modificationDate: new Date(),
    modifiedBy: "Rick Brzozowski",
    status: "Accepted",
    startedBy: "Rick Brzozowski",
    startedOn: new Date(),
    finishedOn: new Date(),
    acceptanceDate: new Date(),
    acceptedBy: "Daniel Nowak",
    parameters: [],
    progress: 1
  },
  {
    id: "235",
    stepNo: 2,
    processId: 1,
    code: "GENINV",
    name: "Invoice generation",
    creationDate: new Date(),
    createdBy: "Rick Brzozowski",
    modificationDate: new Date(),
    modifiedBy: "Rick Brzozowski",
    status: "Accepted",
    startedBy: "Rick Brzozowski",
    startedOn: new Date(),
    finishedOn: new Date(),
    acceptanceDate: new Date(),
    acceptedBy: "Daniel Nowak",
    parameters: [],
    progress: 1
  },
  {
    id: "236",
    stepNo: 3,
    processId: 1,
    code: "ACCDOCGEN",
    name: "Accounting documents generation",
    creationDate: new Date(),
    createdBy: "Rick Brzozowski",
    modificationDate: new Date(),
    modifiedBy: "Rick Brzozowski",
    status: "In progress",
    startedBy: "Rick Brzozowski",
    startedOn: new Date(),
    parameters: [],
    progress: 0.49
  },
  {
    id: "237",
    stepNo: 4,
    processId: 1,
    code: "ACCDOCEXP",
    name: "Accounting documents exporting",
    creationDate: new Date(),
    createdBy: "Rick Brzozowski",
    modificationDate: new Date(),
    modifiedBy: "Rick Brzozowski",
    status: "Not started",
    parameters: [],
    progress: 0
  }
]

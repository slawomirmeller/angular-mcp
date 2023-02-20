export interface ProcessRun {
  id: string;
  code: string;
  creationDate: Date;
  createdBy: string;
  modificationDate?: Date;
  modifiedBy?: string;
  status: string;
  startedBy?: string | null;
  startedOn?: Date | null;
  finishedOn?: Date | null;
  period: {
    dateFrom?: Date | null,
    dateTo?: Date | null,
    year?: number | null,
    month?: number| null
  }
}

export const processRuns: ProcessRun[] = [
  {
    id: "1",
    code: "EOD",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "In progress",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: null,
    period: {
      dateFrom: new Date(),
      dateTo: new Date(),
    }
  },
  {
    id: "2",
    code: "EOD",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "Success",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: new Date(),
    period: {
      dateFrom: new Date(),
      dateTo: new Date(),
    }
  },
  {
    id: "3",
    code: "EOD",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "Failed",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: new Date(),
    period: {
      dateFrom: new Date(),
      dateTo: new Date(),
    }
  },
  {
    id: "4",
    code: "EOD",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "Success",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: null,
    period: {
      dateFrom: new Date(),
      dateTo: new Date(),
    }
  },
  {
    id: "5",
    code: "EOM",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "Success",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: new Date(),
    period: {
      year: 2023,
      month: 1,
    }
  },
  {
    id: "5",
    code: "EOY",
    creationDate: new Date(),
    createdBy: "Chris Amon",
    modificationDate: new Date(),
    modifiedBy: "Chris Amon",
    status: "Success",
    startedBy: "Leon Donovan",
    startedOn: new Date(),
    finishedOn: null,
    period: {
      year: 2022
    }
  },
]

export interface Process {
  code: string;
  name: string;
  lastRun: Date;
  lastStatus: string;
}

export const processes = [
  {
    code: "EOD",
    name: "End of day",
    lastRun: new Date(),
    lastStatus: "Success"
  },
  {
    code: "EOM",
    name: "End of month",
    lastRun: new Date(),
    lastStatus: "Failed"
  },
  {
    code: "EOY",
    name: "End of year",
    lastRun: new Date(),
    lastStatus: "Success"
  },
  {
    code: "REVALO",
    name: "Revalorization",
    lastRun: new Date(),
    lastStatus: "Success"
  }
]

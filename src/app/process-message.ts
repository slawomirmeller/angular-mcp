export interface ProcessMessage {

  sequenceNo: number;
  code: string;
  text: string;
  type: string;
}

export const messages: ProcessMessage[] = [
  {
    sequenceNo: 1,
    code: "CODE-0001",
    text: "Step has been started.",
    type: "Info"
  },
  {
    sequenceNo: 2,
    code: "CODE-0002",
    text: "Missing currency rate for currency USD on date 2023-01-30.",
    type: "Critical"
  },
  {
    sequenceNo: 3,
    code: "CODE-0003",
    text: "Step has been finished with errors.",
    type: "Info"
  }
]

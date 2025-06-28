interface completeType {
  fraction: string;
  arrow: "up" | "down";
  percentage: string;
}


// Project schema
export type Project = {
  projectName: string;
  projectTitle: string;
  clientName: string;
  complete: completeType;
  st: string;
  dq: string;
  qt: string;
  status: "Active" | "Pending" | "Closed" | "Progress";
};

export interface Response {
  status: "Success" | "Error";
  message: string;
  data: any;
}

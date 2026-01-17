export interface Appointment {
  id: number;               // ✅ THIS IS REQUIRED
  issue: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: string;
}

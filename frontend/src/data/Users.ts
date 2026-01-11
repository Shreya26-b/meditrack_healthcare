export type UserRole = "doctor" | "patient";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export const users: User[] = [
  {
    id: 1,
    name: "Dr. John",
    email: "doctor@test.com",
    password: "doctor123",
    role: "doctor",
  },
  {
    id: 2,
    name: "Alice",
    email: "patient@test.com",
    password: "patient123",
    role: "patient",
  },
];

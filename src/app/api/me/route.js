import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Panda Suthapakti",
    studentId: "650610790",
  });
};

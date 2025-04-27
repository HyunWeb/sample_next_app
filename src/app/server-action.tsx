"use server";
import fs from "fs";
import { redirect } from "next/navigation";

const fname = "./data.txt";

if (!fs.existsSync(fname)) {
  fs.writeFileSync(fname, "", "utf8"); // 빈 파일 생성
}

export async function serverAction(form) {
  const input = form.get("input");
  fs.appendFileSync(fname, input + "\n");
  redirect("/other");
}

export async function readData() {
  const data = fs.readFileSync(fname, "utf8");
  return data;
}

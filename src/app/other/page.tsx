"use client";

import Link from "next/link";
import { readData } from "../server-action";
import { useEffect, useState } from "react";

export default function Other() {
  const [data, setData] = useState("nodata");
  useEffect(() => {
    readData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <main>
      <h1 className="title">Other Page</h1>
      <p className="msg">메시지를 저장했습니다.</p>
      <pre className="m-5 p-2 border">{data}</pre>
      <div>
        <Link href="/">go back!!</Link>
      </div>
    </main>
  );
}

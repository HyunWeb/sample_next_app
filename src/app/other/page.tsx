import Image from "next/image";
import Link from "next/link";

export default function Other() {
  return (
    <main>
      <h1 className="title">Other page</h1>
      <p className="msg">이건 다른 페이지 입니다.</p>
      <div>
        <Image src="/sample.png" width={200} height={200} />
      </div>
      <div>
        <a href="/">go back!!</a>
      </div>
    </main>
  );
}

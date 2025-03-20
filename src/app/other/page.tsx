import Link from "next/link";

export default function Other() {
  return (
    <main>
      <h1 className="title">Other page</h1>
      <p className="msg">이건 다른 페이지 입니다.</p>
      <div>
        <Link href="/">go back!!</Link>
      </div>
    </main>
  );
}

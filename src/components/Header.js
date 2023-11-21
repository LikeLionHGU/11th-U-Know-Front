import Icon from "@/assets/Icon";
import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
        height: "70px",
        color: "layout.white",
      }}
    >
      <Link href="/">Logo</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "400px",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link href="/graduate/result">졸업심사요건</Link>
          <Link href="/course/simulate">수강계획시뮬레이션</Link>
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
            gap: "20px",
          }}
        >
          <Icon name="BellIcon" size="30" />
          <Icon name="LogoutIcon" size="30" />
        </div>
      </div>
    </div>
  );
}


export default function Footer() {
  return (
    <div className="mt-20 font-noto-thai">
        <hr />
        <div className="mt-5 mb-10 mx-auto max-w-[80rem] flex justify-between">
            <p>&copy; AFK Chicken 2022-2025,Inc</p>
            <p className="text-xs hidden sm:block">Version Website V.0.3.5</p>
            <div className="flex gap-3">
                <a href="/">หน้าหลัก</a>
                <a href="#option">ฟังก์ชั่น</a>
                <a href="/#">เกี่ยวกับ</a>
            </div>
        </div>
    </div>
  )
}

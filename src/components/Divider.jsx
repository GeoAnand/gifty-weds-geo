export default function Divider() {

  return (

    <div className="flex items-center justify-center gap-5 my-10">

      <div className="w-28 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]"></div>

      <div className="text-[#fff] text-sm drop-shadow-[0_0_8px_rgba(212,175,55,.8)]">
        ✝
      </div>

      <div className="w-28 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]"></div>

    </div>

  );
}
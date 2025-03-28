import "@/styles/gradient-blur.css";

export default function BottomBlurOut() {
  return (
    <div className="gradient-blur pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[7%] border-b border-white/10 before:absolute before:inset-0 before:z-[1] before:backdrop-blur-[0.5px] after:absolute after:inset-0 after:backdrop-blur-[32px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`${index}-bottom-blur-out`}
          className="absolute inset-0"
          style={{
            zIndex: index + 2,
            backdropFilter: `blur(${2 ** index}px)`,
            WebkitBackdropFilter: `blur(${2 ** index}px)`,
          }}
        />
      ))}
    </div>
  );
}

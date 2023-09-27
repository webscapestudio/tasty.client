import cn from "classnames";

interface iBonusCode {
  className?: string;
  bonus: string;
}

export const BonusCode = ({ className, bonus }: iBonusCode) => {
  return (
    <div
      className={cn(
        "pt-[13px] pb-[12px] px-[15px] border-dashed border-gray font-bold border text-center rounded-lg",
        className
      )}
    >
      {bonus}
    </div>
  );
};

import cn from "classnames";

interface iBonusCode {
  className?: string;
  bonus: string;
}

export const BonusCode = ({ className, bonus }: iBonusCode) => {
  return (
    <div
      className={cn(
        "py-[15px] px-[15px] border-dashed border-gray font-bold border text-center rounded-lg",
        className
      )}
    >
      {bonus}
    </div>
  );
};

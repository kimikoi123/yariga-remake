interface PropertyReferralsBarProps {
  title: string
  percent: string
  color: string,
  barLength: string
}

export default function PropertyReferralsBar({
  title,
  percent,
  color,
  barLength
}: PropertyReferralsBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between font-bold">
        <div className="">{title}</div>
        <div>{percent}</div>
      </div>
      <div className="mb-6 h-2 w-full bg-neutral-200  rounded-full">
        <div className={`h-2 ${color} ${barLength}  rounded-full`}></div>
      </div>
    </div>
  )
}

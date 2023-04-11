

interface NotificationItemComponentProps {
    name: string
    icon: string
    message: string
    duration: string
}

export default function NotificationItemComponent({ name, icon, message, duration }: NotificationItemComponentProps) {
  return (
    <div className="flex items-start gap-4 border-b pb-4 mb-4">
      <img src={icon} alt="" />
      <div className="flex flex-col gap-2">
        <div className="font-bold">{name}</div>
        <div className="text-gray-400">
          {message}
        </div>
        <div>{duration}</div>
      </div>
    </div>
  )
}

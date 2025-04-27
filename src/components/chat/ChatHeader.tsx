
interface ChatHeaderProps {
  name: string;
}

const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b flex items-center">
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default ChatHeader;

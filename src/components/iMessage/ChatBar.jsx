const ChatBar = ({ name, description, pfp, active = false }) => {
  return (
    <div
      className={`flex h-16 flex-row items-center gap-2 rounded-md px-3 ${
        active ? 'bg-apple-blue text-white' : ''
      }`}
    >
      <img src={pfp} className="h-12 w-12 rounded-full" />
      <div className="flex flex-col items-start justify-start align-top">
        <a className="block text-sm font-semibold">{name}</a>
        <a className="block text-xs">{description}</a>
      </div>
    </div>
  );
};

export default ChatBar;

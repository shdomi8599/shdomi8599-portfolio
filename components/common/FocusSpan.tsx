const FocusSpan = ({ content }: { content: string }) => {
  return (
    <span className="text-red">
      <b>{content}</b>
    </span>
  );
};

export default FocusSpan;

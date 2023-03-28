type LinkSpan = {
  src: string;
  content: string;
};

const LinkSpan = ({ src, content }: LinkSpan) => {
  return (
    <a className="text-blue" href={src} target="_blank">
      <b>{content}</b>
    </a>
  );
};

export default LinkSpan;

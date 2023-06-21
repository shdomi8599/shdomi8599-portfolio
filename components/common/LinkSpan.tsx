type Props = {
  src: string;
  content: string;
};

const LinkSpan = ({ src, content }: Props) => {
  return (
    <a className="text-blue" href={src} target="_blank">
      <b>{content}</b>
    </a>
  );
};

export default LinkSpan;

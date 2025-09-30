type ButtonProps = {
  title: string;
};

export const Button = (props: ButtonProps) => {
  const { title } = props;

  return (
    <button
      className="bg-amber-300 border-1 border-amber-500 p-5 "
      style={{ borderRadius: "60px" }}
    >
      {title}
    </button>
  );
};

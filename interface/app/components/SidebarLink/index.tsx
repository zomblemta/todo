import { useNavigate } from "react-router";

export type linkDataType = {
  title: string;
  path: string;
};

type SidebarLinkProps = {
  node: linkDataType;
};

export default ({ node }: SidebarLinkProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(node.path);
      }}
    >
      <span> {node.title}</span>
    </div>
  );
};

import { Avatar, IconButton, Tooltip } from "@mui/material";
interface TooltipIconButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
const TooltipIconButton: React.FC<TooltipIconButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title="Open settings">
      <IconButton onClick={onClick} sx={{ p: 0 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://scontent.ftlv8-1.fna.fbcdn.net/v/t1.6435-9/51957959_2061504237265124_5348925109065220096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c2f564&_nc_ohc=QFQCoaoYrtIAX9JR1Bd&_nc_ht=scontent.ftlv8-1.fna&oh=00_AfBD0jbjBQS9w4HxmUnzR1Eh398b-ZNSxL4Hom7VeDZuAA&oe=65812A33"
        />
      </IconButton>
    </Tooltip>
  );
};
export default TooltipIconButton;

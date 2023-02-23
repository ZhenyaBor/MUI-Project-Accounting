import {
  Checkbox as CheckboxMui,
  styled,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

const BpIcon = styled("span")(({ theme }) => ({
  width: 16,
  height: 16,
  border: "1px solid",
  borderRadius: "4px",
  borderColor: theme.palette.checkbox.main,
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: "4px",
  display: "flex",
  "&:before": {
    margin: "auto",
    backgroundColor: theme.palette.checkbox.main,
    borderRadius: "2px",
    width: 10,
    height: 10,
    content: '""',
  },
}));

type CheckboxMuiProps = Omit<FormControlLabelProps, "control"> & CheckboxProps;

export const CheckboxGrey = ({ ...props }: CheckboxMuiProps) => (
  <FormControlLabel
    {...props}
    control={<CheckboxMui icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} disableRipple />}
  />
);

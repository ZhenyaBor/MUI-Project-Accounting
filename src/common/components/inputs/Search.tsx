import { InputBase as InputBaseMui, styled, InputBaseProps } from "@mui/material";

const InputBase = styled(InputBaseMui)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.grey[600],
    fontSize: "14px",
    fontWeight: theme.typography.fontWeightBold,

    "&::placeholder": {
      color: theme.palette.grey[900],
      fontSize: "inherit ",
    },
  },
}));

export const Search = (props: InputBaseProps) => <InputBase {...props} />;

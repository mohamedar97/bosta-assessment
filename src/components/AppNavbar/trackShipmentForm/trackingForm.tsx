import {
  Box,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  title: string;
  placeholder: string;
  handleTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const TrackingForm: React.FC<Props> = ({
  title,
  placeholder,
  handleTextFieldChange,
  handleSearch,
}) => {
  return (
    <MenuItem
      disableRipple
      sx={{
        padding: "0px !important",
        "&hover": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Box paddingY={16} paddingX={20}>
        <Typography marginBottom={3} variant="h5">
          {title}
        </Typography>
        <Stack direction="row" alignItems="center">
          <TextField
            inputProps={{ pattern: "[0-9]*" }}
            onChange={handleTextFieldChange}
            sx={{ height: "56px", borderRadius: "4px " }}
            placeholder={placeholder}
          />
          <IconButton
            onClick={handleSearch}
            disableRipple
            type="button"
            sx={{
              color: "#ffffff",
              height: "56px",
              padding: "10px",
              borderRadius: "4px ",
              border: "1px solid rgba(0, 0, 0, 0.23)",
              backgroundColor: "#e30613",
              "&:hover": {
                backgroundColor: "#e30613",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>
    </MenuItem>
  );
};

export default TrackingForm;

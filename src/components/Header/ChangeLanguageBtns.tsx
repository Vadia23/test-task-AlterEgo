import { Button, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguageBtns() {
  const { i18n } = useTranslation();

  const changeLanguage = (Language: string) => {
    i18n.changeLanguage(Language);
  };

  React.useEffect(() => {
    i18n.changeLanguage("ua");
  }, []);

  return (
    <Box>
      <Button
        onClick={() => changeLanguage("ua")}
        style={{ padding: 0, color: "white" }}
      >
        Ua
      </Button>
      <Button
        onClick={() => changeLanguage("en")}
        style={{ padding: 0, color: "white" }}
      >
        En
      </Button>
    </Box>
  );
}

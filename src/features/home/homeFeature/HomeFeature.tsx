import { Stack, Container, Typography, Box, CardMedia } from "@mui/material";
import { palette } from "theme";
import { Accounting } from "./components";

export const HomeFeature = (): JSX.Element => (
  <Container maxWidth="xl">
    <Box display="flex" sx={{ marginBottom: { md: 8, sm: 4, xs: 3 } }}>
      <Typography
        alignSelf="center"
        sx={{ margin: "0 auto", typography: { md: "h2", sm: "h3", xs: "h4" } }}
        color={palette.grey[600]}>
        Ведення облику для малого та середнього бізнесу:
      </Typography>
    </Box>
    <Stack direction={{ sm: "column-reverse", md: "row" }} alignItems="center" spacing={5}>
      <Stack sx={{ width: { sm: "100%", md: "60%" }, alignSelf: "flex-start" }}>
        <Typography
          alignSelf="center"
          sx={{ margin: "0 auto", typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
          color={palette.grey[600]}>
          Бухгалтер і Я досвід роботи більше 20 років. Обслуговування ТОВ мікро-малий бізнес, ФОП
          1-3 група. <br />
          <br />
          Наша фірма це економія часу та коштів. У будь-якій точці Землі ви можете дати завдання
          бухгалтеру, який закріплений за вами, подивитися всю інформацію про ведення вашої фірми та
          її фінансовий стан.
          <br /> <br />
          Вчасно отримана інформація є головним козирем будь-якої компанії.
        </Typography>
      </Stack>
      <CardMedia
        component="img"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5FrCoc4dq5LXvY6KTEZE8xBbzLGQqVhvXg&usqp=CAU"
        alt="photo"
        sx={{
          width: { md: "40%", sm: "60%", xs: "100%" },
          height: "500px",
          objectFit: "fill",
        }}
      />
    </Stack>

    <Accounting />
  </Container>
);

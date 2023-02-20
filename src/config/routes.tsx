import { Home, About, Price, Contacts, Services } from "../pages";
import { LMSLayout } from "../layouts";

export const routes = [
  {
    element: <LMSLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/price", element: <Price /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/services", element: <Services /> },
    ],
  },
];

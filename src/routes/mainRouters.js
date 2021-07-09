
import ContactFormPage from '../pages/ContactFormPage';
import ContactListPage from "../pages/ContactListPage";
import AuthPage from '../pages/AuthPage';


export const mainRoutes = [
 {
  name: "Phonebook",
  path: "/",
  component: ContactFormPage,
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: false,
 },
 {
  name: "Contacts",
  path: "/contacts",
  component: ContactListPage,
  exact: true,
  isLink: true,
  isPrivate: true,
  isRestricted: false,
 },
 {
  name: "Registration",
  path: "/registration",
  component: AuthPage,
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: true,
 },
 {
  name: "Login",
  path: "/login",
  component: AuthPage,
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: true,
 },
];
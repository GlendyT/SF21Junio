import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { NavLinksinterfaces, SocialMediainterfaces } from "../types/types";

export const navLinks: NavLinksinterfaces[] = [
  {
    id: 1,
    name: "Inicio",
    href: "/",
  },
  {
    id: 2,
    name: "Historia",
    href: "#historia",
  },
  {
    id: 3,
    name: "Nosotras",
    href: "#nosotras",
  },
  {
    id: 4,
    name: "Album",
    href: "#album",
  },
  {
    id: 5,
    name: "Participantes",
    href: "#participantes",
  },
  {
    id: 6,
    name: "Musicos",
    href: "#musicos",
  },
];

export const socialmedia: SocialMediainterfaces[] = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/sociedad_femenina_21junio/",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61572086262216",
    icon: FaFacebook,
  },
  {
    id: 3,
    name: "TikTok",
    url: "https://www.tiktok.com/@sociedad_femenina_21junio",
    icon: FaTiktok,
  },
  {
    id: 4,
    name: "YouTube",
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: FaYoutube,
  },
];

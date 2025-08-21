import { musiciansinterfaces } from "@/types/types";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export const musicians: musiciansinterfaces[] = [
  {
    id: 1,
    name: "Atitlan Kumbia Band",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    history:
      "Somos una agrupación originarios del pueblito mágico San Juan La Laguna. La idea surge a principios de año del 2021 con la idea del Músico LUCAS BIZARRO... Nos caracterizamos en llevar en alto la cultura de nuestra bella Guatemaya Portando nuestros bellos trajes típicos en nuestros conciertos..con el fin de hacer saber a la juventud el valor de nuestras culturas.",
    music: "7ydwYX6HCkI",
    socialMedia: [
      {
        id: 1,
        name: "Youtube",
        url: "https://www.youtube.com/@atitlankumbiaband502",
        icon: FaYoutube,
      },
      {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/atitlan.kumbia_band/",
        icon: FaInstagram,
      },
      {
        id: 3,
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100063998139111",
        icon: FaFacebook,
      },
      {
        id: 4,
        name: "TikTok",
        url: "https://www.tiktok.com/@atitlankumbiabandoficial",
        icon: FaTiktok,
      },
    ],
  },
  {
    id: 2,
    name: "Grupo Tumbao",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    history:
      "Grupo Tumbao es una agrupación musical guatemalteca que fusiona ritmos latinos con la música tradicional de Guatemala. Fundada en 2010, la banda ha ganado reconocimiento por su energía en el escenario y su compromiso con la preservación de la cultura musical guatemalteca.",
    music: "lQI8wBKDVPA",
    socialMedia: [
      {
        id: 1,
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCNvVEQS71qUlXsV3HLzLoyQ",
        icon: FaYoutube,
      },
      {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/grupotumbaogt/",
        icon: FaInstagram,
      },
      {
        id: 3,
        name: "Facebook",
        url: "https://www.facebook.com/Incomparsbles",
        icon: FaFacebook,
      },
      {
        id: 4,
        name: "TikTok",
        url: "https://www.tiktok.com/@grupotumbao",
        icon: FaTiktok,
      },
    ],
  },
];

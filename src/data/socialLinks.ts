import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/benearag",
    description: "Veja meus projetos"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/benearag",
    description: "Conecte-se comigo"
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://instagram.com/benearag",
    description: "Minhas fotos"
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:contato@benearag.com",
    description: "Entre em contato"
  }
];

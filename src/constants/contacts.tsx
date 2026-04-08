import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: Mail,
    key: "email",
    value: "kyrylo.hasan.dev@gmail.com",
    href: "mailto:kyrylo.hasan.dev@gmail.com",
  },
  {
    icon: Phone,
    key: "phone",
    value: "+38 (093) 414-6423",
    href: "tel:+380934146423",
  },
  {
    icon: MapPin,
    key: "location",
    value: "Dnipro, Ukraine",
    href: "https://maps.google.com/?q=Dnipro,Ukraine",
  },
] as const;

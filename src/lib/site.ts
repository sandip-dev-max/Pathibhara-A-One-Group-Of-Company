export const SITE = {
  name: "Pathivara A One Group of Company",
  shortName: "Pathivara Group",
  tagline: "Trusted Job Link Agency in Nepal",
  address: "Tinkune, Kathmandu, Nepal",
  phone: "9744953912",
  phoneTel: "+9779744953912",
  whatsapp: "9862341430",
  whatsappLink: "https://wa.me/9779862341430",
  socials: {
    tiktok: "#https://www.tiktok.com/@pathivaraaonecompany?_r=1&_t=ZS-96PYpLMnAaz",
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/9779862341430",
  },
};

export function waLink(message?: string) {
  const base = SITE.whatsappLink;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

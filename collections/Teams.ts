import type { CollectionConfig } from "payload";

export const Teams: CollectionConfig = {
  slug: "teams",
  admin: {
    useAsTitle: "fullName",
  },
   access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      required: true,
    },
    {
      name: "designation",
      label: "Designation",
      type: "text",
    },
    {
      name: "photo",
      label: "Photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      type: "text",
    },
    {
      name: "facebook",
      label: "Facebook",
      type: "text",
    },
    {
      name: "twitter",
      label: "Twitter",
      type: "text",
    },
    {
      name: "instagram",
      label: "Instagram",
      type: "text",
    },
  ],
};

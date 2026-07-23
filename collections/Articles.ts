import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "postTitle",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  versions: {
    drafts: true
  },
  fields: [
    {
      name: "postTitle",
      label: "Post Title",
      type: "text",
      required: true,
    },
    {
      name: "postBody",
      label: "Post Body",
      type: "richText",
    },
    {
      name: "thumbnailImage",
      label: "Thumbnail image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "featured",
      label: "Featured?",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "summary",
      label: "Summary",
      type: "text",
    },
    {
      name: "articleLink",
      label: "Article Link",
      type: "text",
      admin: {
        description: "External link for the article",
      },
    },
  ],
};

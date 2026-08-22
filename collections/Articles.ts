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
      name: "metaTitle",
      label: "Meta Title",
      type: "text",
    },
    {
      name: "metaDescription",
      label: "Meta Description",
      type: "text",
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
      name: "thumbnailAltText",
      label: "Thumbnail Alt Text",
      type: "text",
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

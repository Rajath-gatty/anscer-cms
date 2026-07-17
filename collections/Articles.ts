import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "postTitle",
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
      name: "mainImage",
      label: "Main image",
      type: "upload",
      relationTo: "media",
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

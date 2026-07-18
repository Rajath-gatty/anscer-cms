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
  fields: [
    {
      name: "postTitle",
      label: "Post Title",
      type: "text",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: 'select',
      required: true,
      options: [
        { label: 'Press Release', value: 'Press Release' },
        { label: 'Announcement', value: 'Announcement' },
        { label: 'Case Study', value: 'Case Study' },
      ]
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

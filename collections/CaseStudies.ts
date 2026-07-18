import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "url",
      label: "URL",
      type: "text",
      required: true
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
       required: true
    },
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
       required: true
    },
    {
      name: "description",
      label: "Description",
      type: "text",
       required: true
    },
      {
      name: 'caseStudy',
      label: 'Case Study For',
      required: true,
      type: 'select',
      options: [
        { label: 'AR 250', value: 'ar-250' },
        { label: 'AR 500', value: 'ar-500' },
        { label: 'AR 650', value: 'ar-650' },
        { label: 'AR 1250', value: 'ar-1250' },
        { label: 'PSR G2G', value: 'psr-g2g' },
        { label: 'PSR 2000', value: 'psr-2000' },
        { label: 'PSR 2000R', value: 'psr-2000r' },
        { label: 'PSR 1000R', value: 'psr-1000r' },
        { label: 'LBR 500', value: 'lbr-500' },
        { label: 'AGV 100', value: 'agv-100' },
      ]
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
    }
  ],
};

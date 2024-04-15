export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "banner",
      type: "image",
      title: "Banner",
    },
    {
      name: "projectBanner",
      type: "image",
      title: "Project Banner",
    },
    {
      name: "favourite",
      type: "boolean",
      title: "Favourite",
    },
    {
      name: "changelog",
      type: "date",
      title: "Changelog",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "overview",
      type: "array",
      title: "Overview",
      of: [{ type: "text" }],
    },
    {
      name: "highlights",
      type: "array",
      title: "Highlights",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};

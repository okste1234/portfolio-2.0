import { type SchemaTypeDefinition } from "sanity";
import projectSchema from "./schema/projectSchema";
import experienceSchema from "./schema/experienceSchema";
import faqSchema from "./schema/faqsSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, experienceSchema, faqSchema],
};

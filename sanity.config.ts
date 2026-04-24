"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem()
              .title("Hero Banner")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("About Page")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.divider(),
            S.listItem()
              .title("Policy Pages")
              .child(S.documentTypeList("policyPage").title("Policy Pages")),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["siteSettings", "hero", "aboutPage", "policyPage"].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

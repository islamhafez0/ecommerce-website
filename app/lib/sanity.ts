import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "3irvbca9",
  dataset: "production",
  apiVersion: "2023-11-09",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

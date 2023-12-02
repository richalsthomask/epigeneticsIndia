import path from "path";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import matter from "gray-matter";

const root = process.cwd();

export async function getMarkdownFile(id, type = "blogs") {
  const fullPath = path.join(root, "data", type, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

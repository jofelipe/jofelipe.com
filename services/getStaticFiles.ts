import fs from 'fs';
import matter from 'gray-matter';
import { format } from 'date-fns';

function getPosts() {
  const dir = `${process.cwd()}/content/posts/`;
  const files = fs.readdirSync(dir);

  return files
    .sort(function (a, b) {
      return (
        fs.statSync(dir + b).mtime.getTime() -
        fs.statSync(dir + a).mtime.getTime()
      );
    })
    .map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

      const { data } = matter(markdownWithMetadata);

      const formattedDate = format(data.date, 'dd/MM/yyyy');

      const frontmatter = {
        ...data,
        date: formattedDate,
      };

      return {
        slug: filename.replace('.md', ''),
        frontmatter,
      };
    });
}

function getProjects() {
  const dir = `${process.cwd()}/content/projects/`;
  const files = fs.readdirSync(dir);

  return files
    .sort(function (a, b) {
      return (
        fs.statSync(dir + b).mtime.getTime() -
        fs.statSync(dir + a).mtime.getTime()
      );
    })
    .map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/projects/${filename}`)
        .toString();

      const { data } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
      };

      return {
        slug: filename.replace('.md', ''),
        frontmatter,
      };
    });
}

export { getPosts, getProjects };

import fs from 'fs';
import matter from 'gray-matter';
import { format } from 'date-fns';

function readFile(dir: string, filename: string) {
  return fs.readFileSync(`${dir}/${filename}`).toString();
}

function getPosts() {
  const dir = `${process.cwd()}/content/posts/`;
  const files = fs.readdirSync(dir);

  return files
    .sort(function (a, b) {
      const fileA = readFile('content/posts', a);
      const dataA = matter(fileA);

      const fileB = readFile('content/posts', b);
      const dataB = matter(fileB);

      return dataB.data.date - dataA.data.date;
    })
    .map((filename) => {
      const fileWithMetadata = readFile('content/posts', filename);

      const { data } = matter(fileWithMetadata);

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

export { getPosts };

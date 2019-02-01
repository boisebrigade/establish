import * as Contentful from 'contentful';
console.log(process.env);

const client = Contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getCategories = async () => {
  const categories = await client.getEntries({ content_type: 'category' });
  return categories.items.map(category => ({
      name: category.fields.title,
      icon: category.fields.icon.fields.file.url,
      ideas: category.fields.ideas,
  }));
};

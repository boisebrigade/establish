import * as Contentful from 'contentful';
import { Storage } from '../Storage';

const client = Contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getAllResources = async () => {
  const categories = await client.getEntries({content_type: 'category'});
  const allCategories = await Promise.all(await categories.items.map(async category => await transformCategory(category)))

  const resourceCategories = allCategories.filter(category => category.resources.length > 0)
  const resources = resourceCategories.reduce((resources, category) => resources.concat(category.resources), [])
  await Storage.open()
  await Storage.table('resources').bulkPut(resources) // Upsert found Resources

  return resourceCategories
};

const fetchResources = async (categoryId = '', categoryTitle = '') => {
  const resources = await client.getEntries({'fields.category.sys.id': categoryId, content_type: 'resource'});
  return Promise.all(await resources.items.map(async resource => ({
    category: {
      id: categoryId,
      name: categoryTitle
    },
    ...(await transformResources(resource))
  })))
}

const transformCategory = async (category) => {
  const {
    fields: {
      title: name = null,
      icon: { fields: { file: { url: icon } } } = { fields: { file: { url: null } } },
      ideas = [],
      subcategories = [],
    },
    sys: {
      id,
    }
  } = category;

  return {
    id: id.substr(0, 6),
    name,
    icon,
    ideas,
    resources: await fetchResources(id.substr(0, 6), name),
    subcategories: subcategories.length ? subcategories.map(cat => transformCategory(cat)) : [],
  }
};

const transformResources = async (resource) => {
  const {
    fields: {
      title,
      description,
      webAddress,
      email,

      address,
      phone,

      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    },
    sys: {
      id
    }
  } = resource;


  return {
    id: id.substr(0, 6),
    title,
    description,
    links: webAddress,
    email,
    address,
    phone,
    availability: sunday || monday || tuesday || wednesday || thursday || friday || saturday ? {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    } : null
  }
};

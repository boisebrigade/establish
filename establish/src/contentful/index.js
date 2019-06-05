import * as Contentful from 'contentful';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
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
  const resources = await client.getEntries({'fields.category_establish.sys.id': categoryId, content_type: 'resource'});
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
      mobileIcon: { fields: { file: { url: icon } } } = { fields: { file: { url: null } } },
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
    resources: await fetchResources(id, name),
    subcategories: subcategories.length ? subcategories.map(cat => transformCategory(cat)) : [],
  }
};

const transformResources = async (resource) => {
  const {
    fields: {
      title,
      description,
      webSite = null,
      email,

      address,
      phoneNumber = '',

      availability = [],
    },
    sys: {
      id
    }
  } = resource;

  const hours = availability.reduce((acc, {fields: {day, hours = null, callForAvailability = null}}) => {
    if (hours || callForAvailability)
      acc[day] = {hours: hours, callForAvailability: callForAvailability}
    return acc
  }, {})

  let number = null;

  if (phoneNumber) {
    number = parsePhoneNumberFromString(`${phoneNumber.replace(/ |\)|\(|-/g, '')}`, 'US');
  }

  return {
    id: id.substr(0, 6),
    title,
    description,
    website: webSite,
    email,
    address,
    phoneNumber: number,
    availability: Object.entries(hours).length !== 0 ? hours: null
  }
};

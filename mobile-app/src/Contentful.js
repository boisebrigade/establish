import * as Contentful from 'contentful';

let parsedCategories = [];

const client = Contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getCategories = async () => {
    if (!parsedCategories.length) {
        const categories = await client.getEntries({content_type: 'category'});
        parsedCategories = categories.items.map(category => transformCategory(category));
    }
    return parsedCategories;
};

const transformCategory = (category) => {
    const {
        fields: {
            title: name = null,
            icon: { fields: { file: { url: icon } } } = { fields: { file: { url: null } } },
            ideas = [],
            subcategories = [],
        }
    } = category;
    return {
        name,
        icon,
        ideas,
        subcategories: subcategories.length ? subcategories.map(cat => transformCategory(cat)) : [],
    }
};

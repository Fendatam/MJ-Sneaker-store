import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'cyckbeph',
    dataset: 'production',
    apiVersion: '2023-01-06',
    useCdn: true,
    token: 'skuSHX3ZwyrZYpqz7XFqcCDWiR7vosGv6K2FDmVlPspcuGWjcJlGmg2g2yPXWFFsKhdjlV6DFvY50vvENSp1za9fzkWii1CcZhs1UVRBHy4PBPdRogLT0nH7hNpn4aN1Yap2IQVd4e7AiFAfsvGyla3LkLUIUatooqo56LrnlciM2gonImmU'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
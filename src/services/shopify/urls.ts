import {env} from "app/config/env"

export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
        mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/315010252991/products.json`,
    },
    collections: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
        'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/${id}/products.json`
    },
}
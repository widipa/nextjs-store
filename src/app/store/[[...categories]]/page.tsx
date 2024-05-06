import {ProductsWrapper} from "app/components/Store/ProductsWrapper";
import {getProducts} from "app/services/shopify/products";
import {getCollections, getCollectionsProducts} from "app/services/shopify/collections";


interface CategoryProps {
    params: {
        categories: string[],
        searhParams?: string
    }
}

export default async function Category(props: CategoryProps) {
    let products: ProductType[] = []

    const {categories} = props.params;
    const collections = await getCollections()

    if (categories?.length > 0) {
        const selectedCollectionId =
            collections.find((collection: any) => collection.handle === categories[0]).id

        products = await getCollectionsProducts(selectedCollectionId)

    } else {
        products = await getProducts()
    }

    return (
        <ProductsWrapper products={products}/>
    )
}
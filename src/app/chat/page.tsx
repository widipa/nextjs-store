//src\app\chat\page.tsx

import {Chat} from "app/components/chat/chat"
import {getProducts} from "app/services/shopify/products"
import {createAgent} from "app/utils/openai/createAgent"


export default async function ChatPage() {

    const products = await getProducts()
    const productsInfo = products.map((product: any) => ({
        title: product.title,
        handle: product.handle,
        price: product.price,
        description: product.description,
        id: product.id
    }))
    const agent = createAgent(JSON.stringify(productsInfo))

    return <Chat agent={agent}/>
}

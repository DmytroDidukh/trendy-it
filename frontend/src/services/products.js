import {gql} from 'apollo-boost'

import client from "./index";

export const getProducts = () => (
client.query({
    query: gql`
        {
            getProducts {
                id
                name
                images {
                    link
                }
                colors {
                    type
                }
                price
                oldPrice
                description
                available
                sale
                newItem
                toSlider
                createdAt
            }
        }
    `
}));

export const getProductById = async (id) => (
await client.query({
    variables: {
        id
    },
    query: gql`
        query($id: ID!) {
            getProductById(id: $id) {
                id
                name
                images {
                    link
                }
                colors {
                    type
                }
                price
                oldPrice
                description
                available
                sale
                newItem
                toSlider
                createdAt
            }
        }
    `
}))


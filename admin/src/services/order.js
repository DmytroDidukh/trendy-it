import {gql} from 'apollo-boost'

import client from "./index";

const getOrders = () =>
client.query({
    query: gql`
        {
            getOrders {
                id,
                customer {
                    name
                    surname
                    email
                    phone
                }
                delivery {
                    method
                    city
                    postOffice
                    address {
                        street
                        built
                        apartment
                    }
                }
                products {                  
                    name  
                    price
                    quantity
                    color
                }
                connectionMethod
                orderId
                status
                createdAt
            }
        }
    `
});

const updateOrderStatus = async ({id, status}) => {
    await client.mutate({
        variables: {
            id,
            status
        },
        mutation: gql`
            mutation($id: ID!, $status: String) {
                updateOrderStatus(id: $id, status: $status) {
                   status
                }
            }
        `
    });
    await client.resetStore();
};

const deleteOrder = async (id) => {
    await client.mutate({
        variables: {
            id
        },
        mutation: gql`
            mutation($id: ID!) {
                deleteOrder(id: $id) {
                    customer {
                        name
                    }
                }
            }
        `
    })
    await client.resetStore();
};

export {
    getOrders,
    updateOrderStatus,
    deleteOrder,
};

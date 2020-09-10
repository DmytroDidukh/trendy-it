import { gql } from 'apollo-boost'

import client from "./index";

export const getBanners = () =>
    client.query({
        query: gql`
            {
                getBanners {
                    id
                    title
                    image
                    description            
                }
            }
        `
});

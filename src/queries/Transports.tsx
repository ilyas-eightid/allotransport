import client from "../../apollo-client";

const TransportsQuery = async (query: any, variables?: any) => {
    const data = await client.query({
        query: query
        ,
        variables: variables
    })

    return data;
}

export default { TransportsQuery };
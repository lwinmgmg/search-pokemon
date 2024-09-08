export default async function fetchData<T>(query: string, variables: NonNullable<unknown>): Promise<T>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const graphql = JSON.stringify({
        query: query,
        variables: variables
    })
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        next: { revalidate: 3600 }
    };
    const data = await fetch(process.env.BACK_END_URL || "https://graphql-pokemon2.vercel.app/", requestOptions)
    return await data.json() as T
}

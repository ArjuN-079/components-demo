export async function load({fetch}) {
    const res = await fetch (`http://dummyjson.com/users`);
    const users = await res.json();
    return {users};
}
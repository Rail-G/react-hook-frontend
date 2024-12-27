export async function postRequest(url: string, data: {login: string, password: string}): Promise<{token: string}> {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        throw new Error('Not valid login or password. Please try again.')
    }
    const result = await response.json()
    return result
}

export async function getRequestWithToken(url: string, token: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error('Not valid token')
    }
    const result = await response.json()
    return result
}
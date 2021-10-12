export interface ItemUserListInterface{
    page: number,
    total: number,
    total_pages: number,
    data: ItemUser[]
}

export interface ItemUser{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
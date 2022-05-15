export interface Menus{
  menus: Menu[]
}

export interface Items{
  Items: Menu[]
}

export interface Menu{
  id: string,
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}

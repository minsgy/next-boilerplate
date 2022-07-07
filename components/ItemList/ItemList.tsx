import React from 'react'
import { Item, ItemUList } from './style'

const ITEM_LIST = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'This is item 3',
  },
]

export const ItemList = () => {
  return (
    <ItemUList>
      {ITEM_LIST.map((item) => (
        <Item key={item.id}>{item.description}</Item>
      ))}
    </ItemUList>
  )
}

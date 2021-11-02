import { useState } from 'react'

export const List = ({ entities, arrayId }) => {
  const [expandedIds, setExpandedIds] = useState([])

  function handlerClick(item) {
    setExpandedIds((prevValue) => {
      if (!prevValue.includes(item)) {
        return [...prevValue, item]
      } else {
        return prevValue.filter((el) => el !== item)
      }
    })
  }

  return (
    <ul>
      {arrayId.map((id) => {
        const { url, title, pages } = entities.pages[id]
        return (
          <li key={id}>
            <button onClick={() => handlerClick(id)}></button>
            <a href={url}>{title}</a>
            {pages && expandedIds.includes(id) && (
              <List entities={entities} arrayId={pages} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

import css from './contents.module.css'
import { useState } from 'react'
import { data } from './json'
import { List } from './List'
export const Contents = () => {
  console.log('data', data)
  console.log(data.entities.pages['concepts.module.path'])
  // const hide = {
  //   display: 'none',
  // }
  // const show = {
  //   display: 'flex',
  // }

  //   const listItems = data.topLevelIds.map((item, index) => {
  //     const toggleArrow = arrow.includes(item)
  return (
    <List entities={data.entities} arrayId={data.topLevelIds} />
    //   <div
    //     key={index}
    //     className={
    //       !toggleArrow ? css.list : [css.list, css.background].join(' ')
    //     }
    //   >
    //     <div className={css.headline}>
    //       <div
    //         onClick={() => handlerClick(item)}
    //         className={
    //           !toggleArrow
    //             ? [css.arrow, css.arrow_up].join(' ')
    //             : [css.arrow, css.arrow_down].join(' ')
    //         }
    //       ></div>
    //       <div
    //         style={{ cursor: 'pointer' }}
    //         onClick={() => handlerClick(item)}
    //         className={toggleArrow ? css.font : null}
    //       >
    //         {data.entities.pages[item].title}
    //       </div>
    //     </div>
    //     <div className={css.wood} style={!toggleArrow ? hide : show}>
    //       дерево
    //     </div>

    //   </div>
  )
  //   })

  //return <section className={css.section}>{listItems}</section>
}

import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex items-center justify-center flex-col'>
        {links.map(link=><NavLink href={link.href} title={link.title}/>)}
    </ul>
  )
}

export default MenuOverlay
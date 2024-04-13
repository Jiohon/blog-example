import InternalMenuBar from './MenuBar'

import Title from './Title'
import Link from './Link'
import Text from './Text'
import Tag from './Tag'

type InternalMenuBarType = typeof InternalMenuBar

export interface MenuBarInterface extends InternalMenuBarType {
  Title: typeof Title
  Link: typeof Link
  Text: typeof Text
  Tag: typeof Tag
}

const MenuBar = InternalMenuBar as MenuBarInterface

MenuBar.Title = Title
MenuBar.Link = Link
MenuBar.Text = Text
MenuBar.Tag = Tag

export default MenuBar

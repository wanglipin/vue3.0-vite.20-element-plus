import {
  ElAside,
  ElButton,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadioButton,
  ElRadioGroup,
  ElSelect,
  ElSubmenu
} from 'element-plus';
const Element: Array<object> = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRadioGroup,
  ElRadioButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
]
const EleUse = (app: any) => {
  Element.forEach((item: Object) => {
    app.use(item, { size: 'small', zIndex: 3000 })
  })
}
export default (app: any) => {
  EleUse(app)
}

import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCol,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
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
  ElHeader,
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
  ElDropdownItem,
  ElCol,
  ElAvatar
]
const EleUse = (app: any) => {
  Element.forEach((item: Object) => {
    app.use(item, { size: 'small', zIndex: 3000 })
  })
}
export default (app: any) => {
  EleUse(app)
}

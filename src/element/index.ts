import {
  ElAside,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
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
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
  ElRadioButton,
  ElRadioGroup,


  ElScrollbar, ElSelect,
  ElSubmenu
} from 'element-plus';
const Element: Array<object> = [
  ElMain,
  ElMessage,
  ElScrollbar,
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
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem
]
const EleUse = (app: any) => {
  Element.forEach((item: Object) => {
    app.use(item, { size: 'small', zIndex: 3000 })
  })
}
export default (app: any) => {
  EleUse(app)
}

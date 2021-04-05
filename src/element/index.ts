import {
  ElAside,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,


  ElCard,




























  ElCheckbox, ElCol,
  ElContainer,















  ElDrawer, ElDropdown,
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


  ElMessageBox, ElRadioButton,
  ElRadioGroup,


  ElScrollbar, ElSelect,
  ElSubmenu, ElTable,
  ElTableColumn,





  ElTag
} from 'element-plus';
const Element: Array<object> = [
  ElMain,
  ElDrawer,
  ElMessageBox,
  ElCard,
  ElTag,
  ElTable,
  ElTableColumn,
  ElCheckbox,
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

import {
	ElAside,
	ElAvatar,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElButton,
	ElCard,
	ElCheckbox,
	ElCheckTag,
	ElCol,
	ElContainer,
	ElDrawer,
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
	ElMessageBox,
	ElOption,
	ElRadioButton,
	ElRadioGroup,
	ElRow,
	ElScrollbar,
	ElSelect,
	ElTable,
	ElTableColumn,
	ElTag
} from 'element-plus'
const Element: Array<object> = [
	ElOption,
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
	ElMenuItemGroup,
	ElMenuItem,
	ElRadioGroup,
	ElRadioButton,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
	ElCol,
	ElRow,
	ElAvatar,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElCheckTag
]
const EleUse = (app: any) => {
	Element.forEach((item: Object) => {
		app.use(item, { size: 'small', zIndex: 3000 })
	})
}
export default (app: any) => {
	EleUse(app)
}

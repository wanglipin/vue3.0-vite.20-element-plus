/*
 * @Author: 王立品
 * @Date: 2021-10-07 19:52:24
 * @LastEditTime: 2021-10-07 20:57:19
 * @FilePath: \filee:\learning\vue3.0-vite.20-element-plus\src\element\index.ts
 */
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
	ElSubMenu,
	ElTable,
	ElTableColumn,
	ElTag,
	ElTree
} from 'element-plus'
const Element: Array<object> = [
	ElTree,
	ElOption,
	ElMain,
	ElDrawer,
	ElMessageBox,
	ElSubMenu,
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

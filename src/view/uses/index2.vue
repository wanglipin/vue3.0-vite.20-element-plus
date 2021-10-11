<template>
	<el-card class="card-layout">
		<div class="editor-contaier">
			<div>
				<el-menu class="editor-body" :uniqueOpened="true" text-color="#808080">
					<el-submenu index="1">
						<template #title>
							<span>拓扑编辑器</span>
						</template>
						<el-menu-item-group>
							<el-menu-item
								index="1-1"
								data-type="rect"
								data-name="开始"
								@mousedown="handleMouseDown"
							>
								<img src="" alt="" />
								<span>开始</span>
							</el-menu-item>
							<el-menu-item
								index="1-2"
								data-type="circle"
								data-name="结束"
								@mousedown="handleMouseDown"
							>
								<img src="" alt="" />
								<span>结束</span>
							</el-menu-item>
							<el-menu-item
								index="1-3"
								data-type="rectHtml"
								data-name="小柒"
								@mousedown="handleMouseDown"
							>
								<img src="" alt="" />
								<span>小柒</span>
							</el-menu-item>
							<el-menu-item
								index="1-4"
								data-type="rectHtml"
								data-name="全部"
								@click="handClick"
							>
								<img src="" alt="" />
								<span>全屏</span>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</div>
			<el-card class="box-card">
				<template #header>
					<div class="toolbar-content">
						<div class="toolbar-group">
							<div class="toolbar-group-item">
								<!-- :disabled="!canUndo" -->
								<el-button @click="onUndo"> 撤销 </el-button>
							</div>
							<div>
								<!-- :disabled="!canRedo" -->
								<el-button @click="onRedo"> 重做 </el-button>
							</div>
						</div>
					</div>
				</template>
				<div id="container"></div>
			</el-card>
		</div>
	</el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { Graph, Shape, Addon, Dom } from '@antv/x6'
import FlowGraph from '@/components/graph/index'
import container from 'element-plus/lib/components/container'

// 背景色
interface BackgroundOptions {
	color?: string
	image?: string
	position?: CSS.BackgroundPositionProperty<{
		x: number
		y: number
	}>
	size?: CSS.BackgroundSizeProperty<{
		width: number
		height: number
	}>
	repeat?: CSS.BackgroundRepeatProperty
	opacity?: number
	quality?: number
	angle?: number
}
const getContainerSize = () => {
	return {
		width: document.body.offsetWidth - 590,
		height: document.body.offsetHeight - 110
	}
}

export default defineComponent({
	name: '',
	setup() {
		const data = reactive({
			graph: {},
			canUndo: false,
			canRedo: false
		})
		// 创建X6实例
		const initGraph = () => {
			data.graph = new Graph({
				container: document.getElementById('container') as HTMLDivElement,
				width: 1200,
				height: 1200,
				background: {
					// color: '#fffbe6' // 设置画布背景颜色
				} as BackgroundOptions,
				panning: {
					enabled: true,
					modifiers: 'shift' // 可以设置按钮拖动画布
				},
				snapline: true, // 对齐线是移动节点排版的辅助工具
				grid: {
					// 画布相关设置
					size: 10, // 网格大小 10px
					visible: true, // 渲染网格背景
					type: 'doubleMesh',
					args: [
						{
							color: '#eee', // 主网格线颜色
							thickness: 1 // 主网格线宽度
						},
						{
							color: '#ddd', // 次网格线颜色
							thickness: 1, // 次网格线宽度
							factor: 4 // 主次网格线间隔
						}
					]
				},
				scroller: {
					// 设置滚动
					enabled: true,
					pageVisible: true,
					pageBreak: true,
					pannable: false
				},
				mousewheel: {
					// 设置滚动缩放
					enabled: true,
					modifiers: ['ctrl', 'meta'],
					minScale: 0.5,
					maxScale: 2
				},
				connecting: {
					// 配置全局的连线规则
					snap: {
						// 距离节点或者连接桩 50px 时会触发自动吸附
						radius: 50
					},
					allowBlank: false,
					allowMulti: true,
					allowLoop: true,
					highlight: true, // 拖动边时，是否高亮显示所有可用的连接桩或节点，默认值为 false。
					createEdge: () => {
						return new Shape.Edge({
							attrs: {
								// 此项设置样式，不支持自定义样式，可用className和style
								line: {
									stroke: '#5F95FF',
									strokeWidth: 1,
									targetMarker: {
										name: 'classic',
										size: 8
									}
								}
							},
							router: {
								name: 'manhattan'
							}
						})
					},
					validateConnection: ({
						sourceView,
						targetView,
						sourceMagnet,
						targetMagnet
					}) => {
						if (sourceView === targetView) {
							return false
						}
						if (!sourceMagnet) {
							return false
						}
						if (!targetMagnet) {
							return false
						}
						return true
					}
				},
				highlighting: {
					magnetAvailable: {
						name: 'stroke',
						args: {
							padding: 4,
							attrs: {
								strokeWidth: 4,
								stroke: 'rgba(223,234,255)'
							}
						}
					}
				},
				history: true, // 撤销/重做
				clipboard: {
					// 剪切板
					enabled: true
				},
				keyboard: {
					// 启动快捷键
					enabled: true
				},
				embedding: {
					// 通过embedding可以将一个节点拖动到另一个节点中，使其成为另一节点的子节点，默认禁用。
					enabled: true,
					findParent({ node }) {
						const bbox = node.getBBox()
						return this.getNodes().filter((node) => {
							// 只有 data.parent 为 true 的节点才是父节点
							const data = node.getData<any>()
							if (data && data.parent) {
								const targetBBox = node.getBBox()
								return bbox.isIntersectWithRect(targetBBox)
							}
							return false
						})
					}
				}
			})
			const resizeFn = () => {
				// const { width, height } = getContainerSize()
				// graph.resize(width, height)
			}
			resizeFn()
			window.addEventListener('resize', resizeFn)
			return () => {
				window.removeEventListener('resize', resizeFn)
			}
		}
		// 移出/移入 连接桩显示/隐藏
		const changePortsVisible = (visible: boolean) => {
			// const ports = container.querySelectorAll(
			// 	'.x6-port-body'
			// 	// eslint-disable-next-line no-undef
			// ) as NodeListOf<SVGAElement>
			// for (let i = 0, len = ports.length; i < len; i = i + 1) {
			// 	ports[i].style.visibility = visible ? 'visible' : 'hidden'
			// }
		}
		// 拖拽渲染方法
		const dropRender = (node: any, target: any, event: any) => {
			// X6拖拽插件
			const dnd = new Addon.Dnd({
				target,
				scaled: false,
				animation: true,
				validateNode(droppingNode, options) {
					return droppingNode.shape === 'html'
						? new Promise<boolean>((resolve) => {
								const { draggingNode, draggingGraph } = options
								const view = draggingGraph.findView(draggingNode)!
								const contentElem = view.findOne('foreignObject > body > div')
								Dom.addClass(contentElem, 'validating')
								setTimeout(() => {
									Dom.removeClass(contentElem, 'validating')
									resolve(true)
								}, 3000)
						  })
						: true
				}
			})
			// 开始拖拽
			dnd.start(node, event)
		}
		const handleMouseDown = (e: any) => {
			const target = e.currentTarget
			const type = target.getAttribute('data-type')
			const name = target.getAttribute('data-name')
			let node = {}
			switch (type) {
				case 'rect':
					node = data.graph.createNode({
						width: 100,
						height: 40,
						ports: {
							items: [
								{
									group: 'top',
									id: 'in1',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)'
										}
									}
								},
								{
									group: 'top',
									id: 'in2',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)'
										}
									}
								},
								{
									group: 'bottom',
									id: 'out1',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)'
										}
									}
								},
								{
									group: 'bottom',
									id: 'out2',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)'
										}
									}
								}
							],
							groups: {
								top: {
									position: { name: 'top' }
								},
								bottom: {
									position: { name: 'bottom' }
								}
							}
						},
						attrs: {
							label: {
								text: name,
								fill: '#6a6c8a'
							},
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							}
						}
					})
					break
				case 'circle':
					node = data.graph.createNode({
						width: 80,
						height: 80,
						shape: 'html',
						ports: {
							items: [
								{ group: 'top', id: 10 },
								{ group: 'right', id: 11 },
								{ group: 'bottom', id: 12 },
								{ group: 'left', id: 13 }
							],
							groups: {
								// 设置不同连接桩样式，in，out 名称
								top: {
									position: 'top',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)',
											style: {
												// 隐藏连接桩
												visibility: 'hidden'
											}
										}
									}
								},
								right: {
									position: 'right',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)',
											style: {
												// 隐藏连接桩
												visibility: 'hidden'
											}
										}
									}
								},
								bottom: {
									position: 'bottom',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)',
											style: {
												// 隐藏连接桩
												visibility: 'hidden'
											}
										}
									}
								},
								left: {
									position: 'left',
									attrs: {
										circle: {
											magnet: true,
											r: 5,
											stroke: 'rgb(49, 208, 198)',
											style: {
												// 隐藏连接桩
												visibility: 'hidden'
											}
										}
									}
								}
							}
						},
						html: () => {
							const wrap = document.createElement('div')
							wrap.style.width = '100%'
							wrap.style.height = '100%'
							wrap.style.display = 'flex'
							wrap.style.color = 'red'
							wrap.style.alignItems = 'center'
							wrap.style.justifyContent = 'center'
							wrap.style.border = '2px solid rgb(49, 208, 198)'
							wrap.style.background = '#fff'
							wrap.style.borderRadius = '100%'
							wrap.innerText = name
							return wrap
						}
					})
					break
				case 'rectHtml':
					node = data.graph.createNode({
						width: 60,
						height: 60,
						shape: 'html',
						ports: [
							{
								attrs: {
									circle: {
										magnet: true,
										r: 5,
										stroke: 'rgb(49, 208, 198)'
									}
								}
							}
						],
						html: () => {
							const wraps = document.createElement('div')
							// wrap.appendChild('<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"/>');
							wraps.style.width = '100%'
							wraps.style.height = '100%'
							wraps.style.display = 'flex'
							wraps.style.color = 'green'
							wraps.style.alignItems = 'center'
							wraps.style.justifyContent = 'center'
							wraps.style.border = '2px solid rgb(49, 208, 198)'
							wraps.style.background = '#fff'
							// wrap.style.borderRadius = '100%';
							wraps.innerText = name
							return wraps
						}
					})
					break
			}
			// 开始拖拽渲染
			dropRender(node, data.graph, e)
		}
		const handClick = () => {
			let dom = document.getElementById('container')
			dom.requestFullscreen()
			console.log(11111)
		}
		const onUndo = () => {
			data.graph.history.undo()
		}
		const onRedo = () => {
			data.graph.history.redo()
		}
		onMounted(() => {
			initGraph()
			// 监听鼠标移入事件
			data.graph.on('node:mouseenter', () => {
				changePortsVisible(true)
			})
			// 监听鼠标移出
			data.graph.on('node:mouseleave', () => {
				changePortsVisible(false)
			})
			if (data.graph.isHistoryEnabled()) {
				data.graph.disableHistory()
			} else {
				data.graph.enableHistory()
			}
			data.graph.history.on('change', () => {
				console.log(data.graph.history)
				data.canUndo = data.graph.history.canUndo()
				data.canRedo = data.graph.history.canRedo()
			})
		})
		return {
			onUndo,
			onRedo,
			handleMouseDown,
			handClick,
			...toRefs(data)
		}
	}
})
</script>
<style scoped lang="scss">
.card-layout {
	::v-deep .el-card__body {
		//样式穿透
		padding: 0;
	}
	::v-deep .el-card__header {
		padding: 5px;
	}
}
.editor-contaier {
	display: flex;
	.editor-body {
		width: 200px;
	}
	li {
		// text-align: center;
		cursor: move;
		-moz-user-select: none; /* Firefox私有属性 */
		-webkit-user-select: none; /* WebKit内核私有属性 */
		-ms-user-select: none; /* IE私有属性(IE10及以后) */
		-khtml-user-select: none; /* KHTML内核私有属性 */
		-o-user-select: none; /* Opera私有属性 */
		user-select: none; /* CSS3属性 */
	}
	.is-active {
		background: none !important;
		color: #808080;
	}
}
.toolbar-content {
	display: flex;
	.toolbar-group {
		display: flex;
	}
}
</style>

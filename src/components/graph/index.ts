import { Addon, FunctionExt, Graph, Shape } from '@antv/x6'
export default class FlowGraph {
	// constructor (htmlDom: HTMLDivElement ) {
	//   this.container = htmlDom
	// }
	static graph: Graph
	static dnd: Object
	static init() {
		this.graph = new Graph({
			container: this.container,
			width: 1000,
			height: 800,
			background: {
				// color: '#fffbe6', // 设置画布背景颜色
			},
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
		// this.initShape()
		// this.initGraphShape()
		// this.initEvent()
		return this.graph
	}
	static initShape() {
		const { graph } = this
		const r1 = graph.createNode({
			width: 60,
			height: 60,
			shape: 'html',
			html: () => {
				const wrap = document.createElement('div')
				wrap.style.width = '100%'
				wrap.style.height = '100%'
				wrap.style.display = 'flex'
				wrap.style.alignItems = 'center'
				wrap.style.justifyContent = 'center'
				wrap.style.border = '2px solid rgb(49, 208, 198)'
				wrap.style.background = '#fff'
				wrap.style.borderRadius = '100%'
				wrap.innerText = '王立品111'
				return wrap
			}
		})
		const r2 = graph.createNode({
			width: 100,
			height: 40,
			attrs: {
				label: {
					text: '陈曦',
					fill: '#6a6c8a'
				},
				body: {
					stroke: '#31d0c6',
					strokeWidth: 2
				}
			}
		})
		// const c1 = graph.createNode({
		//   shape: 'flow-chart-image-rect',
		// })
		// const c2 = graph.createNode({
		//   shape: 'flow-chart-title-rect',
		// })
		// const c3 = graph.createNode({
		//   shape: 'flow-chart-animate-text',
		// })
		// const g1 = graph.createNode({
		//   shape: 'groupNode',
		//   attrs: {
		//     text: {
		//       text: 'Group Name',
		//     },
		//   },
		//   data: {
		//     parent: true,
		//   },
		// })
		// this.graph.addEdge({ r1, r2 });
		this.graph.centerContent()
		this.dnd = new Addon.Dnd({
			target: this.graph,
			scaled: false,
			animation: true
		})
	}
	static initGraphShape() {
		// this.graph.fromJSON(graphData as any)
	}
	static showPorts(ports: NodeListOf<SVGAElement>, show: boolean) {
		for (let i = 0, len = ports.length; i < len; i = i + 1) {
			ports[i].style.visibility = show ? 'visible' : 'hidden'
		}
	}
	static initEvent() {
		const { graph } = this
		const container = document.getElementById('container')!

		graph.on('node:contextmenu', ({ cell, view }) => {
			const oldText = cell.attr('text/text') as string
			cell.attr('text/style/display', 'none')
			const elem = view.container.querySelector('.x6-edit-text') as HTMLElement
			if (elem) {
				elem.innerText = oldText
				elem.focus()
			}
			const onBlur = () => {
				cell.attr('text/text', elem.innerText)
			}
			elem.addEventListener('blur', () => {
				onBlur()
				elem.removeEventListener('blur', onBlur)
			})
		})
		graph.on(
			'node:mouseenter',
			FunctionExt.debounce(() => {
				const ports = container.querySelectorAll(
					'.x6-port-body'
				) as NodeListOf<SVGAElement>
				this.showPorts(ports, true)
			}),
			500
		)
		graph.on('node:mouseleave', () => {
			const ports = container.querySelectorAll(
				'.x6-port-body'
			) as NodeListOf<SVGAElement>
			this.showPorts(ports, false)
		})

		graph.on('node:collapse', ({ node, e }: any) => {
			e.stopPropagation()
			node.toggleCollapse()
			const collapsed = node.isCollapsed()
			const cells = node.getDescendants()
			cells.forEach((n: any) => {
				if (collapsed) {
					n.hide()
				} else {
					n.show()
				}
			})
		})
		// backspace
		graph.bindKey('delete', () => {
			const cells = graph.getSelectedCells()
			if (cells.length) {
				graph.removeCells(cells)
			}
		})
	}
}

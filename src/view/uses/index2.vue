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
								<el-button :disabled="!canUndo" @click="onUndo">
									撤销
								</el-button>
							</div>
							<div>
								<!-- :disabled="!canRedo" -->
								<el-button :disabled="!canRedo" @click="onRedo">
									重做
								</el-button>
							</div>
						</div>
					</div>
				</template>
				<div id="container"></div>
				<el-form :inline="true" :model="nodesFrom" class="demo-form-inline" label-width="100px">
					<el-row style="border-top: 1px solid #ebeef5; padding: 20px 0 0 20px">
						<el-col :span="24">
							<el-form-item label="关联脚本">
								<el-select v-model="nodesFrom.region" placeholder="活动区域">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="参数一">
								<el-input
									v-model="nodesFrom.input"
									placeholder="请输入内容"
								></el-input>
							</el-form-item>
						</el-col>
						<el-row>
							<el-col :span="8">
								<el-form-item label="配置项">
									<el-input
										v-model="nodesFrom.input"
										placeholder="请输入内容"
									></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="配置项">
									<el-input
										v-model="nodesFrom.input"
										placeholder="请输入内容"
									></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="配置项">
									<el-input
										v-model="nodesFrom.input"
										placeholder="请输入内容"
									></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-col :span="24">
							<el-form-item label="参数类型">
								<el-input
									v-model="nodesFrom.input"
									placeholder="请输入内容"
								></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-card>
		</div>
	</el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { Graph, Shape, Addon, Dom } from '@antv/x6'
import { GridLayout } from '@antv/layout'
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
			datas: {
				nodes: [
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '开始'
							}
						},
						id: '469dc01c-0089-4760-91be-51dce1986f14',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 270,
						// 	y: 140
						// },
						shape: 'rect',
						size: {
							width: 100,
							height: 40
						},
						zIndex: 1
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: '1361307f-60f7-4d81-bc74-2420fa686f22',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 2
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: '817875d8-d681-436b-844e-fee6dac18f70',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 3
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: 'b0e129f2-623d-4322-8143-567fad9b2852',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 4
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: 'cbbfa155-04c7-47bc-be26-dca80cc7fa33',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 5
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: 'e01cb876-0c1d-4a12-979e-3570a7d92c49',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 6
					},
					{
						attrs: {
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							},
							label: {
								fill: '#6a6c8a',
								text: '结束'
							}
						},
						id: '8a24d295-ad94-45b2-a0f5-216cf505d4cb',
						ports: {
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
							},
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
							]
						},
						// position: {
						// 	x: 410,
						// 	y: 200
						// },
						shape: 'rect',
						size: {
							width: 80,
							height: 80
						},
						zIndex: 7
					}
				]
			},
			graph: {},
			canUndo: false,
			canRedo: false,
			nodesFrom: {}
		})
		// 创建X6实例
		const initGraph = () => {
			data.graph = new Graph({
				container: document.getElementById('container') as HTMLDivElement,
				width: window.innerWidth,
				height: 400,
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
					// enabled: true,
					// pageVisible: true,
					// pageBreak: true,
					// pannable: false
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
						radius: 20
					},
					allowPort: true, //是否允许边链接到链接桩
					allowEdge: false, //是否允许边链接到另一个边
					allowNode: false, //是否允许边链接到节点（非节点上的链接桩)
					allowLoop: false, //是否允许创建循环连线，即边的起始节点和终止节点为同一节点
					allowMulti: false, //是否允许在相同的起始节点和终止之间创建多条边
					allowBlank: false, //是否允许连接到画布空白位置的点
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
						// 只能从输出链接桩创建连接
						if (!sourceMagnet) {
							return false
						}

						// 只能连接到输入链接桩
						if (!targetMagnet) {
							return false
						}

						// 判断目标链接桩是否可连接
						const portId = targetMagnet.getAttribute('port')
						const node = targetView.cell

						const port = node.getPort(portId)
						if (port && port.connected) {
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
			const ports = data.graph.container.querySelectorAll(
				'.x6-port-body'
				// eslint-disable-next-line no-undef
			) as NodeListOf<SVGAElement>
			for (let i = 0, len = ports.length; i < len; i = i + 1) {
				ports[i].style.visibility = visible ? 'visible' : 'hidden'
			}
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
				case 'circle':
					node = data.graph.createNode({
						width: 80,
						height: 80,
						ports: {
							items: [
								{ group: 'top', id: 'circleTop' },
								{ group: 'right', id: 'circleRight' },
								{ group: 'bottom', id: 'circleBottom' },
								{ group: 'left', id: 'circleLeft' }
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
				case 'rect':
					node = data.graph.createNode({
						width: 100,
						height: 40,
						ports: {
							items: [
								{ group: 'top', id: 'rectTop' },
								{ group: 'right', id: 'rectRight' },
								{ group: 'bottom', id: 'rectBottom' },
								{ group: 'left', id: 'rectLeft' }
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
						attrs: {
							label: {
								text: name,
								fill: '#6a6c8a'
							},
							body: {
								stroke: '#31d0c6',
								strokeWidth: 2
							}
						},
						tools: [
							{
								name: 'button-remove', // 工具名称
								args: { x: 5, y: 5 } // 工具对应的参数
							}
						]
					})
					break
				case 'rectHtml':
					node = data.graph.createNode({
						width: 80,
						height: 80,
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
		const gridLayout = new GridLayout({
			type: 'grid',
			width: 900,
			height: 400,
			center: [300, 200],
			rows: 5,
			cols: 5
		})
		onMounted(() => {
			initGraph()
			const history = data.graph.history
			// 监听鼠标移入事件
			data.graph.on('node:mouseenter', () => {
				console.log('移入')
				changePortsVisible(true)
			})
			// 监听鼠标移出
			data.graph.on('node:mouseleave', () => {
				console.log('移出')
				changePortsVisible(false)
				console.log(data.graph.toJSON(), '1111111111111111111')
			})
			history.on('change', () => {
				data.canUndo = history.canUndo()
				data.canRedo = history.canRedo()
			})
			const newModel = gridLayout.layout(data.datas)
			data.graph.fromJSON(newModel)
			data.graph.on('node:click', ({ e, x, y, node, view }) => {
				// 点击变色高亮
				// node.attr('body/stroke', 'orange')
				console.log(node, '123131231111111111111111')
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
	height: 100vh;
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

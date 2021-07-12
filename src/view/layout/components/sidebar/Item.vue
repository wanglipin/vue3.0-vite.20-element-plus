<script lang="ts">
import { defineComponent } from 'vue'
import { isExternalLink } from '@/utils/resolvePath'

export default defineComponent({
	name: 'Item',
	props: {
		icon: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		}
	},
	setup(props) {
		const linkProps = (url: string) => {
			if (isExternalLink(url)) {
				return {
					is: 'a',
					href: url,
					target: '_blank',
					rel: 'noopener'
				}
			}
			return {
				is: 'router-link',
				to: url
			}
		}
		return {
			linkProps
		}
	}
})
</script>

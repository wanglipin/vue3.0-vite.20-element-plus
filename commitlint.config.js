// 提交类别
const types = [
	'feat',
	'fix',
	'docs',
	'style',
	'refactor',
	'perf',
	'test',
	'build',
	'release',
	'chore',
	'revert'
]

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-empty': [2, 'never'], // type  不能为空
		'type-enum': [2, 'always', types], // commit  type类别
		'scope-case': [0, 'always'],
		'subject-empty': [2, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [2, 'always', 88] // header 最大长度为88
	}
}

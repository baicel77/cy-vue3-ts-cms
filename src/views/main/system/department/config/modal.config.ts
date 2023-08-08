const modalConfig = {
  pageName: 'department',
  header: {
    newTitle: '新建用户',
    editTitle: '编辑用户'
  },
  labelWidth: '100px',
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入查询的部门名称'
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入查询的领导名称'
    },
    {
      type: 'select',
      label: '上级部门',
      prop: 'parentId',
      placeholder: '请选择上级部门',
      // option: []
    }
  ]
}
export default modalConfig

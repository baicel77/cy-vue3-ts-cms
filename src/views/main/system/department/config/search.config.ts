export default {
  // labelWidth: '200px',
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入查询的部门名称',
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入查询的领导名称'
    },
    {
      type: 'datePicker',
      label: '创建时间',
      prop: 'createAt',
    }
  ]
}

export default {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnText: '新建部门'
  },
  propsList: [
    {
      type: 'selection',
      align: 'center',
      width: '50'
    },
    {
      type: 'index',
      align: 'center',
      label: '序号',
      width: '60'
    },
    {
      align: 'center',
      label: '部门名称',
      prop: 'name',
      width: '150'
    },
    {
      align: 'center',
      label: '部门领导',
      prop: 'leader',
      width: '150'
    },
    {
      align: 'center',
      label: '上级部门',
      prop: 'parentId',
      width: '150'
    },
    {
      type: 'timer',
      label: '创建时间',
      prop: 'createAt',
      align: 'center'
    },
    {
      type: 'timer',
      label: '更新时间',
      prop: 'updateAt',
      align: 'center'
    },
    {
      type: 'handler',
      label: '操作',
      align: 'center',
      width: '150'
    }
  ]
}

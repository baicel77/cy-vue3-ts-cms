export default {
  pageName: 'role',
  header: {
    title: '角色列表',
    btnText: '新建角色'
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
      label: '角色名称',
      prop: 'name',
      width: '150'
    },
    {
      align: 'center',
      label: '权限介绍',
      prop: 'intro',
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

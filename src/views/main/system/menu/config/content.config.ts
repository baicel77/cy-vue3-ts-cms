export default {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnText: '新建菜单'
  },
  propsList: [
    {
      align: 'center',
      label: '菜单名称',
      prop: 'name',
      width: '150'
    },
    {
      align: 'center',
      label: '级别',
      prop: 'type',
      width: '80'
    },
    {
      align: 'center',
      label: '菜单url',
      prop: 'url',
      width: '180'
    },
    {
      label: '菜单icon',
      prop: 'icon',
      align: 'center',
      width: '180'
    },
    {
      label: '排序',
      prop: 'sort',
      align: 'center',
      width: '80'
    },
    {
      label: '权限',
      prop: 'permission',
      align: 'center',
      width: '180'
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
  ],
  otherInfo: {
    rowKey: 'id'
  }
}

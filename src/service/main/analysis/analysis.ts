import cyRequest from "@/service";

export function getGoodsAmountList() {
  return cyRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return cyRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return cyRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return cyRequest.get({
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return cyRequest.get({
    url: '/goods/address/sale'
  })
}

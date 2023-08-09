import { defineStore } from 'pinia'
import {
  getGoodsAmountList,
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'

interface IAnalysisState {
  goodsAmountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    goodsAmountList: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
  }),
  actions: {
    async getGoodsAmountListAction() {
      const res = await getGoodsAmountList()
      this.goodsAmountList = res.data
    },
    async getGoodsCategoryCountAction() {
      const res = await getGoodsCategoryCount()
      this.goodsCategoryCount = res.data
    },
    async getGoodsCategorySaleAction() {
      const res = await getGoodsCategorySale()
      this.goodsCategorySale = res.data
    },
    async getGoodsCategoryFavorAction() {
      const res = await getGoodsCategoryFavor()
      this.goodsCategoryFavor = res.data
    },
    async getGoodsAddressSaleAction() {
      const res = await getGoodsAddressSale()
      this.goodsAddressSale = res.data
    }
  }
})

export default useAnalysisStore

import useLoginStore from "@/store/login/login";
import { storeToRefs } from "pinia";

const loginStore = useLoginStore()
const { permission } = storeToRefs(loginStore)

export function usePermission(identify: string) {
  return !!permission.value.find(item => item === identify)
}

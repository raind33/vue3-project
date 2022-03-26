import { useLoginStore } from '@/store/login/login'

export function usePermission(pageName: string, hanldeName: string) {
  const store = useLoginStore()
  const permissions = store.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`

  // name = "coderwhy"
  // !name -> false
  // !!name -> true
  return !!permissions.find((item: any) => item === verifyPermission)
}

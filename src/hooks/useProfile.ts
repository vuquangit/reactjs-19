import { storageKeys } from '@/constants/storage-keys'
import StorageService from '@/services/local-storage'
import { IAuthMe } from '@/interfaces/auth'
import { useLazyGetProfileQuery } from '@/services/auth'
import { setCredentials } from '@/store/auth'
import { useAppDispatch } from '@/store/hook'

const useProfile = () => {
  const [getProfile] = useLazyGetProfileQuery()
  const dispatch = useAppDispatch()

  const fetchProfile = async () => {
    const tokens = StorageService.get(storageKeys.AUTH_PROFILE)
    if (!tokens) return

    const profileResponse = await getProfile().unwrap()
    const profile = profileResponse?.data as IAuthMe
    dispatch(setCredentials(profile))
  }

  return { fetchProfile }
}

export default useProfile

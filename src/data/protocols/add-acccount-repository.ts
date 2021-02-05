import { AccountModel } from '../../domain/models/account'
import { AddAccountModel } from '../../domain/useCases/adds-acount'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}

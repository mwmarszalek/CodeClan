from modules.bank_account import *


account = {
    "holder_name" : "John",
    "balance": 500,
    "type": "business"
}


print(get_account_name(account))
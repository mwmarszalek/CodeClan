class BankAccount:
    

    def __init__(self,input_holder_name,input_balance,input_type):
        self.holder_name = input_holder_name
        self.balance = input_balance
        self.type = input_type
        self.__rates = {
            "personal":10,
            "business":50
        }
        

    def pay_in(self,amount):
        self.balance += amount

    def pay_monthly_fee(self):
        self.balance -= self.__rates[self.type]





# def get_account_name(account):
#     return account['holder_name']
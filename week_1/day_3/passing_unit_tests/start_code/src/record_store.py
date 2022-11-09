def get_name(record_store):
    return record_store['name']


def find_record_by_title(title,record_store):
    for record in record_store['records']:
        if record['title'] == title:
            return record
    return None


def sell_record(record, record_store):
    money_value = record_store['money']
    record_price = record['price']
    new_money_value = money_value + record_price

    record_store['money'] = new_money_value

    record_store['money'] += record['price']

    record_store['record'].remove(record)




        
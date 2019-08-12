import os

import requests


class DecksOfKeyforge:

    def __init__(self, key=None):
        if key is None:
            key = os.getenv('DOKF_API_KEY')

        self._session = requests.Session()
        self._session.headers.update({
            'Api-Key': key,
            'Content-Type': 'application/json',
            'Timezone': '-300'
        })

    def decks(self, owner):
        payload = {
            "houses":[],
            "page":0,
            "constraints":[],
            "expansions":[],
            "pageSize":200,
            "title":"",
            "sort":"SAS_RATING",
            "forSale": False,
            "notForSale": False,
            "forTrade": False,
            "forAuction": False,
            "withOwners": False,
            "completedAuctions": False,
            "includeUnregistered": True,
            "myFavorites": False,
            "cards":[],
            "sortDirection":"DESC",
            "owner": owner
        }
        r = self._session.post('https://decksofkeyforge.com/api/decks/filter', json=payload)
        r.raise_for_status()
        return r.json()['decks']
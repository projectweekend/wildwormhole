import argparse
import sqlite3

from services import DecksOfKeyforge


def cli():
    parser = argparse.ArgumentParser()
    parser.add_argument('--owner')
    return parser.parse_args()


def deck_json_insert_query(deck_json):
    deck = deck_json['deck']
    query = ''


def main(cli):
    owner = cli.owner
    if owner is None:
        print(f'--owner option is required')
        return

    print(f'Importing decks for {owner}')
    dokf = DecksOfKeyforge()
    conn = sqlite3.connect('wildwormhole.db')

    cur = conn.cursor()
    # Delete old data before import
    query = 'DELETE FROM Decks WHERE owner = ?'
    cur.execute(query, (owner, ))
    conn.commit()
    cur.close()


    cur = conn.cursor()
    query = 'INSERT INTO Decks VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    for deck in dokf.decks(owner):
        query_args = (deck['keyforgeId'], deck['expectedAmber'], deck['amberControl'],
        deck['creatureControl'], deck['artifactControl'], deck['deckManipulation'],
        deck['aercScore'], deck['sasRating'], deck['rawAmber'], owner, deck['name'],
        deck['houses'][0], deck['houses'][1], deck['houses'][2], )
        cur.execute(query, query_args)
    conn.commit()
    cur.close()


if __name__ == "__main__":
    main(cli())
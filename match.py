import argparse
import sqlite3


def cli():
    parser = argparse.ArgumentParser()
    parser.add_argument('--player1')
    parser.add_argument('--player2')
    return parser.parse_args()


def random_deck(conn, owner):
    cur = conn.cursor()
    cur.execute('SELECT * FROM Decks WHERE owner = ? ORDER BY RANDOM() LIMIT 1', (owner, ))
    row = cur.fetchone()
    cur.close()
    return row


def find_match(conn, deck_row, other_owner):
    keyforge_id, expected_aember, aember_control, creature_control, artifact_control, deck_manipulation, aerc_score, sas_rating, raw_aember, owner, name, house1, house2, house3 = deck_row

    point_range = 1
    min_expected_aember = expected_aember - point_range
    max_expected_aember = expected_aember + point_range

    min_aember_control = aember_control - point_range
    max_aember_control = aember_control + point_range

    min_creature_control = creature_control - point_range
    max_creature_control = creature_control + point_range

    min_artifact_control = artifact_control - point_range
    max_artifact_control = artifact_control + point_range

    min_deck_manipulation = deck_manipulation - point_range
    max_deck_manipulation = deck_manipulation + point_range

    query = '''
    SELECT      *
    FROM        Decks
    WHERE       (expected_aember >= ? AND expected_aember <= ?) AND
                (aember_control >= ? AND aember_control <= ?) AND
                (creature_control >= ? AND creature_control <= ?) AND
                (artifact_control >= ? AND artifact_control <= ?) AND
                (deck_manipulation >= ? AND deck_manipulation <= ?) AND
                owner = ? AND
                keyforge_id <> ?
    ORDER BY    RANDOM()
    LIMIT       1
    '''
    query_args = (min_expected_aember, max_expected_aember,
                  min_aember_control, max_aember_control,
                  min_creature_control, max_creature_control,
                  min_artifact_control, max_artifact_control,
                  min_deck_manipulation, max_deck_manipulation,
                  other_owner, keyforge_id, )

    cur = conn.cursor()
    cur.execute(query, query_args)
    row = cur.fetchone()
    cur.close()
    return row


def main(cli):
    if cli.player1 is None or cli.player2 is None:
        print('--player1 and --player2 options are required')
        return

    conn = sqlite3.connect('wildwormhole.db')
    while True:
        p1_deck = random_deck(conn, cli.player1)
        match_deck = find_match(conn, p1_deck, cli.player2)
        if match_deck is None:
            continue
        else:
            break
    conn.close()
    p1_deck_args = [cli.player1] + [i for i in p1_deck[10:]] + [i for i in p1_deck[6:8]]
    p2_deck_args = [cli.player2] + [i for i in match_deck[10:]] + [i for i in match_deck[6:8]]
    msg_template = '{0} playing {1} ({2} | {3} | {4}): AERC {5} | SAS {6}'
    print(msg_template.format(*p1_deck_args))
    print('VS')
    print(msg_template.format(*p2_deck_args))


if __name__ == "__main__":
    main(cli())
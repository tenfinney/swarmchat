// @flow

import type { hex } from '@mainframe/utils-hex'

export type ContactState =
  | 'added'
  | 'received_declined'
  | 'received_pending'
  | 'sent_declined'
  | 'sent_pending'

export type Contact = {
  key: hex,
  type: ContactState,
  topic: hex,
  username?: ?string,
  address?: ?hex,
}

export type Contacts = { [key: string]: Contact }

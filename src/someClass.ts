
export type AddTorrentResponse = { arguments: { 'torrent-added'?: { hashString: string, id: number, name: string }, 'torrent-duplicate'?: { hashString: string, id: number, name: string } }, result: string }

export class Transmission {

  private sessionID = ''
  private readonly host: string
  private readonly username: string | undefined;
  private readonly password: string | undefined;
  private readonly platformType: 'node' | 'web'

  constructor({
                url,
                password,
                username,
                platformType
              }: { url: string, username?: string, password?: string, platformType: 'node' | 'web' }) {
    this.host = url
    this.username = username
    this.password = password
    this.platformType = platformType
  }

  init() {
    if (this.username) {
      return new Promise((resolve, reject) => {
      })
    } else {
      return Promise.resolve('no-need login')
    }
  }

  private sendRequest() {
  }


  loadDaemonSettings() {
  
  }


  moveTorrentsToTop(torrentIDs: string[]) {
  }

  moveTorrentsUp(torrentIDs: string[]) {

  }

  moveTorrentsToBottom(torrentIDs: string[]) {
  }

  moveTorrentsDown(torrentIDs: string[]) {
  }
}

export const getDomainFromTracksFirst = (trackStatus:any) => {
  const firstTracker = trackStatus[0]
  let domain = ''

  if (firstTracker.announce) {
    const url = new URL(firstTracker.announce)
    const firstDot = url.hostname.indexOf('.')
    const lastDot = url.hostname.lastIndexOf('.')
    domain = firstDot !== lastDot ? url.hostname.slice(firstDot + 1) : url.hostname
  }
  return domain
}

export const torrentDeleted = (errorString: string) => {
  return [
    'torrent not registered with this tracker',
  ].includes(errorString)
}

export const getStatusFromTrackerFirst = (trackStatus: any) => {
  let status = ''
  if (!trackStatus[0].lastAnnounceSucceeded && trackStatus[0].announceState != 1) {
    status = trackStatus[0].lastAnnounceResult
  }
  return status
}

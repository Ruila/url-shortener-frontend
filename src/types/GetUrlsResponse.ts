export type GetUrlsResponse = Array<UrlItem>

type UrlItem = {
  id: number
  shorten_url: string
  origin_url: string
  created_by: string
  viewed: number
  created_at: Date
  updated_at: Date
}
